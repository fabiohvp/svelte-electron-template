const { ipcRenderer } = require("electron");

document.addEventListener("sendToServer", function(event) {
  event.preventDefault();
  ipcRenderer.send(event.detail.event, event.detail.detail);
});

ipcRenderer.on("sendToClient", function(event, data) {
  var _event = new CustomEvent(data.event, { ...event, detail: data.detail });
  document.dispatchEvent(_event);
});
