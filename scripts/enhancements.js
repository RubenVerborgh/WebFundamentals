// Avoid iframes (YouTube player etc.) stealing focus
setInterval(function (e) {
  ((e = document.activeElement) instanceof HTMLIFrameElement) && e.blur();
}, 100);

// Advance full-slide video slides on mobile
[].forEach.call(document.getElementsByTagName('iframe'), function (e) {
  e.classList.contains('cover') && e.parentElement.appendChild(document.createElement('div')).classList.add('handle');
});
