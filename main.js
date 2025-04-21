const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    let mainWindow = new BrowserWindow({
        fullscreen: true, // Ativar modo tela cheia
        frame: false, // Remover bordas da janela
        kiosk: true, // Impedir que o usuário saia do app sem fechar
        webPreferences: {
            nodeIntegration: false
        }
    });

    mainWindow.loadURL("https://www.crazygames.com/embed/traffic-rider-vvq");
});

const { globalShortcut } = require('electron');

app.whenReady().then(() => {
    globalShortcut.register('Escape', () => {
        app.quit();
    });
});