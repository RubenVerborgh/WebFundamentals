(function ($) {
  var tabCount = 0;

  var eye = $.fn.eye = function (options) {
    return this.each(function () {
      var resultCount = 0;
      options = options || {};

      // Activate component and wrap old contents
      var $this = $(this).addClass('eye');
      var $contents = $('<div>').addClass('old')
                                .append($this.children());

      // Create list and container for input tabs
      var $inputList = $('<ul>').append($('<li class="label">').text(labels.input));
      var $inputContainer = $('<div>').addClass('data');
      // Create query button and status label
      var $submit = $('<button>');
      var $status = $('<span>');
      // Create list and container for result tabs
      var $resultList = $('<ul>').append($('<li class="label">').text(labels.results));
      var $resultContainer = $('<div>').addClass('results');

      // Add new contents
      var $panel = $('<div>').addClass('client');
      $this.append($contents,
                   $panel.append($inputContainer.append($inputList),
                                 $('<p>').append($submit, $status),
                                 $resultContainer.append($resultList)));

      // Create data, query, and result tabs
      var dataTabs = [], queryTab;
      if (!options.url) {
        $contents.find('.data').each(function () {
          var $this = $(this), dataUri = $this.attr('href') || $this.text();
          dataTabs.push(appendCodeTabFromUrl(dataUri, $inputList, $inputContainer, 'data'));
        });
        $contents.find('.query').each(function () {
          var $this = $(this), queryUri = $this.attr('href') || $this.text();
          $queryTab = appendCodeTabFromUrl(queryUri, $inputList, $inputContainer, 'query');
        });
      }
      else {
        location.hash.substr(1).split('&').forEach(function (part) {
          var keyvalue = part.match(/^([^=]+)=(.*)/),
              key = keyvalue && decodeURIComponent(keyvalue[1]),
              value = keyvalue && decodeURIComponent(keyvalue[2]);
          switch (key) {
          case 'data':
            dataTabs.push(appendCodeTabFromUrl(value, $inputList, $inputContainer, 'data'));
            break;
          case 'query':
            $queryTab = appendCodeTabFromUrl(value, $inputList, $inputContainer, 'query');
            break;
          }
        });
      }
      $inputContainer.tabs();
      $resultContainer.tabs().hide();

      // Hook up submit button
      $submit.button()
             .text(labels.execute)
             .click(showEyeResult);

      function showEyeResult() {
          // Collect data
          var data = [], query = $queryTab.val();
          $(dataTabs).each(function () {
            if (!$(this).hasClass('error'))
              data.push($(this).val());
          });

          // Execute EYE
          $status.text(labels.executing).removeClass('error');
          executeEye({
              path: options.path,
              data: data,
              query: query
            })
            // Create new result tab on success
            .done(function (n3) {
              var resultName = 'result ' + (++resultCount);
              $status.text(labels.success.replace('$', resultName));
              appendCodeTab(resultName,
                            $resultList, $resultContainer, 'result')
                        .text(n3);
              $resultContainer.tabs('refresh')
                              .tabs('option', 'active', resultCount - 1)
                              .slideDown();
            })
            // Display error detail on failure
            .fail(function (reason) {
              $status.text(labels.failure.replace('$', reason)).addClass('error');
            });
        }
    });
  };

  var executeEye = eye.executeEye = function (options) {
    return $.Deferred(function (deferred) {
      $.ajax({
          url: options.path,
          traditional: true,
          data: {
            'data': options.data,
            'query': options.query
          },
          cache: true,
          type: 'POST',
        })
        .done(function (n3) {
          if (n3.error)
            deferred.reject(n3.error);
          else
            deferred.resolve(n3.trimRight());
        })
        .fail(function (response) {
          if (response.responseText)
            deferred.reject(response.responseText.trim());
          else if (response.status)
            deferred.reject('HTTP error ' + response.status + ' \u2013 ' + response.statusText);
          else
            deferred.reject('Unknown HTTP error. Check your connection');
        });
    }).promise();
  };

  var labels = eye.labels = {
    input: 'Input',
    results: 'Results',
    execute: 'Execute EYE',
    executing: 'Executing EYE...',
    success: 'EYE generated $, displayed below.',
    failure: 'Error executing EYE: $.'
  };

  function appendCodeTab(title, $tabList, $tabContainer, cssClass) {
    var tabId = 'eyetab' + (++tabCount),
        $tabLink = $('<li>').addClass(cssClass)
                            .append($('<a>').attr('href', '#' + tabId)
                            .text(title)),
        $tab = $('<textarea>').attr('id', tabId)
                              .addClass(cssClass)
                              .data('link', $tabLink);
    $tabList.append($tabLink);
    $tabContainer.append($tab);
    return $tab;
  }

  function appendCodeTabFromUrl(url, $tabList, $tabContainer, cssClass) {
    var titleMatch = /([\d\w\-_]+)(?:\.[\d\w]+?)$/i.exec(url),
        title = titleMatch ? titleMatch[1] : url,
        $tab = appendCodeTab(title, $tabList, $tabContainer, cssClass);
    $.ajax(url)
      .done(function (n3) {
        $tab.val(n3.trimRight());
        $tab.data('link').attr('title', url);
      })
      .fail(function () {
        $tab.addClass('error').val('Could not load ' + url + '.');
        $tab.data('link').addClass('error');
      });
    return $tab;
  }
}(jQuery));
