function triggerClient(event, detail) {
  var _event = new CustomEvent(event, { detail });
  document.dispatchEvent(_event);
}

function triggerServer(event, detail) {
  var _event = new CustomEvent("sendToServer", { detail: { event, detail } });
  document.dispatchEvent(_event);
}

export { triggerClient, triggerServer };
