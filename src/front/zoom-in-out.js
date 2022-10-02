
let zoom_level = 100
let zoom_adjust = 10
const zoom_level_min = 10
const zoom_level_default = 100
const zoom_level_max = 1000

const classname_over_width = 'over-width'
const classname_over_height = 'over-height'

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

    const max_width = body.clientWidth
    const max_height = body.clientHeight
    const width = main_image.width
    const height = main_image.height

    if (max_width < width) {
        if (!main_image.parentNode.classList.contains(classname_over_width)) {
            main_image.parentNode.classList.add(classname_over_width)
        }
    } else {
        if (main_image.parentNode.classList.contains(classname_over_width)) {
            main_image.parentNode.classList.remove(classname_over_width)
        }
    }

    if (max_height < height) {
        if (!main_image.parentNode.classList.contains(classname_over_height)) {
            main_image.parentNode.classList.add(classname_over_height)
        }
    } else {
        if (main_image.parentNode.classList.contains(classname_over_height)) {
            main_image.parentNode.classList.remove(classname_over_height)
        }
    }
}


