require("@babel/polyfill");
const { app, Menu, globalShortcut } = require("electron");
const log = require("electron-log");
const navBar = require("./navBar");
const { getMainWindow } = require("./window");

require("./Controllers/ParameterizedPageController");

app.on("ready", () => {
	log.catchErrors();
	getMainWindow();
	const mainMenu = Menu.buildFromTemplate(navBar);
	Menu.setApplicationMenu(mainMenu);
});

app.on("will-quit", () => {
	globalShortcut.unregisterAll();
});
