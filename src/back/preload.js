const { contextBridge, ipcRenderer } = require('electron')



// ダークテーマ対応
contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => { return ipcRenderer.invoke('dark-mode:toggle') },
    system: () => { ipcRenderer.invoke('dark-mode:system') }
})



// ファイルを開く
contextBridge.exposeInMainWorld('viewImage', {
    viewImage: (listner, args) => {
        ipcRenderer.on('viewImage', listner, args)
    }
})



// ドロップされたファイル名を受け取り
contextBridge.exposeInMainWorld('dropFile', {
    dropFile: (dropFilePath) => { ipcRenderer.invoke('dropFile', dropFilePath) }
})

// 前のファイルを表示
contextBridge.exposeInMainWorld('prevView', {
    prevView: () => { ipcRenderer.invoke('prevView') },
})

// 次のファイルを表示
contextBridge.exposeInMainWorld('nextView', {
    nextView: () => { ipcRenderer.invoke('nextView') }
})



// 初期状態のDOMドキュメントに介入する場合はDOMContentLoadedイベントで行う
window.addEventListener('DOMContentLoaded', () => {
})


