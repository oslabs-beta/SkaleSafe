const { BrowserWindow, app } = require('electron');
import { electronServer } from '../client/src/data/server';

function createWindow() {
  const win = new BrowserWindow({
    // width: 1920,
    width: 1440,
    height: 1080,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      //   worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
  });
  win.loadURL(electronServer);
}

app.whenReady().then(createWindow);
