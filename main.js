
const { app, ipcMain, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');

let win;

const createWindow = async () => {
    win = new BrowserWindow({
        width: 500,
        height: 500,
        resizable: false,
        'use-content-size': true
        //icon: path.join(__dirname, 'build/images/z-logo.png')
    });

    win.webContents.openDevTools();

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });
};

/** app events */

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

/** ipcMain events */
ipcMain.on('resize-request', (event, w, h) => {
    win.setSize(w, h);
});