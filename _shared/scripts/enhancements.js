(function (shower) {
  // Disable slide builds by default, but re-enable them when 'c' is pressed
  setBuildsEnabled(false);
  shower.player.events.on('keydown', function (e) {
    if (e._data.event.keyCode === 67)
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
    [].forEach.call(document.getElementsByClassName('next'), function (e) {
      e.classList[enabled ? 'remove' : 'add']('active');
    });
  }
})(shower.shower);
