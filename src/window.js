const { BrowserWindow, dialog } = require("electron");
const path = require("path");
const url = require("url");
let mainWindow = null;
let showExitPrompt = false;

function createWindow(hash) {
	let _window = new BrowserWindow({
		minHeight: 768,
		minWidth: 1024,
		show: false,
		icon: __dirname + "/assets/icons/favicon_32.icns",
		webPreferences: {
			//webSecurity: false,
			nodeIntegration: true,
			nodeIntegrationInSubFrames: true
		}
	});

	_window.loadURL(
		url.format({
			pathname: path.join(__dirname, "../svelte/public/index.html"),
			protocol: "file:",
			slashes: true,
			hash
		})
	);

	_window.once("ready-to-show", function () {
		if (process.env.NODE_ENV === "dev") {
			_window.toggleDevTools();
		} else {
			_window.maximize();
		}

		_window.show();
	});

	_window.on("close", function (e) {
		if (showExitPrompt) {
			e.preventDefault(); // Prevents the window from closing
			dialog.showMessageBox(
				{
					type: "question",
					buttons: ["Yes", "No"],
					title: "Confirm",
					message:
						"Do you really want to close this application?"
				},
				function (response) {
					showExitPrompt = true;

					if (response === 0) {
						// Runs the following if 'Yes' is clicked
						showExitPrompt = false;
						mainWindow.close();
					}
				}
			);
		}
	});

	_window.on("closed", function () {
		_window = null;
	});

	return _window;
}

function confirmOnClose(confirmar) {
	showExitPrompt = confirmar;
}

function getMainWindow() {
	if (!mainWindow) {
		mainWindow = createWindow();
	}

	return mainWindow;
}

module.exports = {
	getMainWindow,
	create: createWindow,
	confirmOnClose
};
