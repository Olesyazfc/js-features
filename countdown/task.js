const div = document.getElementById('timer')
let seconds = 59


const timer = setInterval(() => {
    seconds -= 1
    div.textContent = seconds
    if (seconds == 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(timer)
        }
    }, 1000)

