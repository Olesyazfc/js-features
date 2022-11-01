getHole = index => document.getElementById(`hole${index}`)
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
let dead_counter = 0
let lost_counter = 0

for (i = 1; i <= 9; i++) {

    function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick
	}

    const hole = getHole(i)

    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead_counter++
            dead.textContent = dead_counter
        } else { 
            lost_counter++
            lost.textContent = lost_counter
        }
        if (dead_counter == 10) {
            alert('Вы выйграли!')
            dead.textContent = 0
            lost.textContent = 0
            dead_counter = 0
            lost_counter = 0
        }
        if (lost_counter == 5) {
            alert('Вы проиграли!')
            dead.textContent = 0
            lost.textContent = 0
            dead_counter = 0
            lost_counter = 0
        }
    }   
}
