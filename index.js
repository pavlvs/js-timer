// ae⇥ addEventListener
// gi⇥ getElementById
// gt⇥ getElementsByTagName
// qs⇥ querySelector
// cel⇥ createElement
// hect⇥ classList.toggle

// cs⇥ class (ES6)
// csx⇥ extend a class (ES6)
// m⇥ method (ES6 syntax)

// fan⇥ anonymous function
// fn⇥ named function
// asf⇥ async function
// af⇥ arrow function (ES6)
// f⇥ arrow function with body (ES6)
// fr⇥ arrow function with return (ES6)
// rp⇥ return Promise (ES6)

// fe⇥ forEach loop
// map⇥ map function

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    start = () => {
        this.tick()
        this.interval = setInterval(this.tick, 1000)
    }

    pause = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        console.log('tick')
    }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)

// timer.start()
