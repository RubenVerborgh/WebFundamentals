// Avoid iframes (YouTube player etc.) stealing focus
setInterval(function (e) {
  ((e = document.activeElement) instanceof HTMLIFrameElement) && e.blur();
}, 100);
