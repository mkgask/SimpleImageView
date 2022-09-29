
let zoom_level = 100
let zoom_adjust = 10
const zoom_level_min = 10
const zoom_level_max = 1000

const zoomin_element = document.getElementById('zoom-in')
const zoomout_element = document.getElementById('zoom-out')

zoomin_element.addEventListener('click', (ev) => {
    zoomIn()
})

zoomout_element.addEventListener('click', (ev) => {
    zoomOut()
})

document.addEventListener('wheel', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()

    if (ev.wheelDelta > 0) {
        zoomIn()
    } else {
        zoomOut()
    }
}, { passive: false })


function zoomIn() {
    zoom_level += zoom_adjust
    if (zoom_level_max < zoom_level) zoom_level = zoom_level_max
    changeZoom()
}

function zoomOut() {
    zoom_level -= zoom_adjust
    if (zoom_level < zoom_level_min) zoom_level = zoom_level_min
    changeZoom()
}

function changeZoom() {
    const main_image = document.getElementById('main-image')
    main_image.style.height = zoom_level + 'vh'
    main_image.style.maxHeight = zoom_level + 'vh'
    //main_image.style.width = zoom_level + 'vw'
    main_image.style.maxWidth = zoom_level + 'vw'
}


