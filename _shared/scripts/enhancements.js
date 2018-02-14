(function () {
  // Disable slide builds by default, but re-enable them when 'c' is pressed
  setBuildsEnabled(false);
  document.addEventListener('keydown', function (e) {
    if (e.which === 67)
      setBuildsEnabled(true);
  });

  // Avoid full-screen elements (including iframes) stealing focus
  setInterval(function () {
    var focused = document.activeElement;
    if (focused.classList.contains('cover') || focused.classList.contains('image'))
      focused.blur();
  }, 100);

  // Add handles to advance video slides on mobile
  [].forEach.call(document.getElementsByTagName('iframe'), function (e) {
    if (e.classList.contains('cover'))
      e.parentElement.appendChild(document.createElement('div')).classList.add('handle');
  });

  // Enables or disable slide builds
  function setBuildsEnabled(enabled) {
    var classes = { true: 'next', false: 'no-next' };
    var elements = [].slice.call(document.getElementsByClassName(classes[!enabled]));
    elements.forEach(function (e) {
      e.classList.add(classes[enabled]);
      e.classList.remove(classes[!enabled]);
    });
  }
})();
