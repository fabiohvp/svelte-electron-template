const window = require("./window");

function triggerClient(event, detail) {
  window.getMainWindow().webContents.send("sendToClient", {
    event,
    detail
  });
}

module.exports = { triggerClient };
