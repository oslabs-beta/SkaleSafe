const { BrowserWindow, app } = require('electron');

function createWindow(){
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
  win.loadURL('http://localhost:4000');
}

app.whenReady().then(createWindow);


//Best practice across all platforms
//  app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
// });

//For exiting the app on Macs
// app.on('window-all-closed', () => {
// if (process.platform !== 'darwin') {
//   app.quit();
// }
// });