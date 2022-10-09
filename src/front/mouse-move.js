


const main_image = document.getElementById('main-image')

let isMoving = false

const reference = {
    x: 0,
    y: 0
}

let sensitivity = 1.92


document.addEventListener('mousedown', (ev) => {
    ev.preventDefault()

    isMoving = true
    reference.x = ev.clientX
    reference.y = ev.clientY
})

document.addEventListener('mouseup', (ev) => {
    ev.preventDefault()

    isMoving = false
})

document.addEventListener('blur', (ev) => {
    ev.preventDefault()

    isMoving = false
})

document.addEventListener('mousemove', (ev) => {
    ev.preventDefault()
    if (!isMoving) { return }

    if (ev.clientX === reference.x &&
            ev.clientY === reference.y) {
        return
    }

    to = {
        left: main_image.parentNode.scrollLeft + ((reference.x - ev.clientX) * sensitivity),
        top: main_image.parentNode.scrollTop + ((reference.y - ev.clientY) * sensitivity),
    }

    main_image.parentNode.scrollTo(to)
    reference.x = ev.clientX
    reference.y = ev.clientY
})


