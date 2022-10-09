const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')


// サンドボックス機能を有効化
app.enableSandbox()



const createWindow = () => {
    const store = require('./store')

    const mainWindow = new BrowserWindow({
        x: store.get('x'),
        y: store.get('y'),
        width: store.get('w'),
        height: store.get('h'),
        center: false,

        title: "Simple image view",
        disableAutoHideCursor: true,

        webPreferences: {
            preload: path.join(__dirname, 'back/preload.js')
        }
    })

    mainWindow.removeMenu()
    mainWindow.loadFile(path.join(__dirname, 'front/index.html'))

    if ( process.env.ReleaseType === 'Debug') { mainWindow.webContents.openDevTools() }

    mainWindow.webContents.once('did-finish-load', () => {
        const defaultImage = require('./defaultImage')()
        mainWindow.webContents.send('default-image', defaultImage)
    })

    // ダークテーマ対応
    ipcMain.handle('dark-mode:toggle', () => {
        if (nativeTheme.shouldUseDarkColors) {
            nativeTheme.themeSource = 'light'
        } else {
            nativeTheme.themeSource = 'dark'
        }

        return nativeTheme.shouldUseDarkColors
    })

    // ダークテーマ対応
    ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system'
    })

    // 終了時データ保存
    mainWindow.once('close', () => {
        const { x, y, width, height } = mainWindow.getBounds()

        store.set({
            x: x,
            y: y,
            w: width,
            h: height
        })
    })
}



// アプリケーションの初期化処理が完了してからウィンドウを生成する
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) { createWindow() }
    })
})



// 全ウィンドウが終了した時にアプリケーションを終了する
// MacOSは除く
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


