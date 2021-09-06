// ae⇥ addEventListener
// gi⇥ getElementById
// gt⇥ getElementsByTagName
// qs⇥ querySelector
// cel⇥ createElement
// hect⇥ classList.toggle

// cs⇥ class (ES6)
// csx⇥ extend a class (ES6)
// m⇥ method (ES6 syntax)

// asf⇥ async function
// af⇥ arrow function (ES6)
// rp⇥ return Promise (ES6)


class Timer {
    constructor (durationInput, startButton, pauseButton) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        this.startButton.addEventListener('click', this.start )
    }

    start () {
        console.log('Time to start the timer!')
    }
}

const durationInput =  document.querySelector('#duration')
const startButton =  document.querySelector('#start')
const pauseButton =  document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)
