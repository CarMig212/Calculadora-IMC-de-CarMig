const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, 'historial.json');

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

//Lo de arrriba es una función que crea la ventanita y eso
//Acá lee el historial
ipcMain.handle('get-history', () => {
    if (!fs.existsSync(dataPath)) return [];
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
});

//Acá se guarda un nuevo cálculo en el historial
ipcMain.handle('save-imc', (event, record) => {
    let history = [];
    if (fs.existsSync(dataPath)) {
        history = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    }
    history.push(record);
    fs.writeFileSync(dataPath, JSON.stringify(history, null, 2));
    return history;
});