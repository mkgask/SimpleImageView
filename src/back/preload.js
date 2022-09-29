const { contextBridge, ipcRenderer } = require('electron')



// ダークテーマ対応
contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => { return ipcRenderer.invoke('dark-mode:toggle') },
    system: () => { ipcRenderer.invoke('dark-mode:system') }
})



// 関連付けを開く対応
contextBridge.exposeInMainWorld('defaultImage', {
    defaultImage: (listner) => { ipcRenderer.on('default-image', listner) }
})



// 初期状態のDOMドキュメントに介入する場合はDOMContentLoadedイベントで行う
window.addEventListener('DOMContentLoaded', () => {
})


