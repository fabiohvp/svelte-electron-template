const { ipcMain } = require("electron");
const { triggerClient } = require("../eventHandler");

ipcMain.on("changeParameterValue", onChangeParameterValue);

function onChangeParameterValue(e, newId) {
	triggerClient("routeChange", {
		path: `/parameterized-page/${newId}`
	});

	// or
	// e.sender.send("sendToClient", {
	// 	event: "routeChange", 
	// 	detail: {
	// 		path: `/parameterized-page/${newId}`
	// 	}
	// });
}