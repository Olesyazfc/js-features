const cookie = document.getElementById('cookie')

const width = cookie.width
const height = cookie.height

cookie.onmousedown = () => {
    cookie.width *= 2
    cookie.height *= 2
}

cookie.onmouseup = () => {
    cookie.width = width
    cookie.height = height
}

const clicker = document.getElementById('clicker__counter')
const speed_counter = document.getElementById('clicker__speed_counter')
let counter = 0
let clicker_speed = []

cookie.onclick = () => {

    if (counter == 0) {
        clicker_speed[1] = Date.now()
        get_time = 1
    } else {
        clicker_speed.splice(0, 1)
        clicker_speed[1] = Date.now()
        const interval = clicker_speed[1] - clicker_speed[0]
        get_time = 1 / (interval / 1000)

    }

    if (get_time < 1) {
        speed_counter.textContent = Math.ceil(get_time)
    } else {
        speed_counter.textContent = Math.round(get_time)
    }
    counter += 1
    clicker.textContent = counter

    console.log(clicker_speed)
}

