//Preload, sirve para que la interfaz HTML se comunique con el archivo main
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getHistory: () => ipcRenderer.invoke('get-history'),
    saveIMC: (record) => ipcRenderer.invoke('save-imc', record)
});