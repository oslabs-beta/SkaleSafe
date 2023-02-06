const { BrowserWindow, app } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
  });
  win.loadURL('localhost:4040/');

}

app.whenReady().then(createWindow);
