const { triggerClient } = require("./eventHandler");

const navBar = [
	{
		label: "Home",
		submenu: [
			{
				enabled: false,
				label: "Home",
				accelerator: process.platform == "darwin" ? "Command+Shift+H" : "Ctrl+Shift+H",
				click() {
					triggerClient("routeChange", {
						path: "/home"
					});
				}
			}
		]
	},
	{
		label: "Routes",
		submenu: [
			{
				label: "About",
				accelerator: "Alt+A",
				click() {
					triggerClient("routeChange", {
						path: "/about"
					});
				}
			},
			{
				label: "Parameterized Page",
				accelerator: "Alt+P",
				click() {
					triggerClient("routeChange", {
						path: "/parameterized-page/123"
					});
				}
			}
		]
	}
];

// If OSX, add empty object to menu
if (process.platform == "darwin") {
	navBar.unshift({});
}

// Add developer tools option if in dev
if (process.env.NODE_ENV === "dev") {
	navBar.push({
		label: "Developer Tools",
		submenu: [
			{
				role: "reload"
			},
			{
				label: "Toggle DevTools",
				accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
				click(item, focusedWindow) {
					focusedWindow.toggleDevTools();
				}
			}
		]
	});
}

module.exports = navBar;
