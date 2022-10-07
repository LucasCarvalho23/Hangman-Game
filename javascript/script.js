class Hangman {

    constructor() {
        this.library = [
            'qatar', 'ecuardor', 'senegal', 'netherlands', 'england', 'iran', 'usa', 'wales', 'argentina', 'saudiarabia', 'mexico', 'poland', 'france', 'australia', 'denmark', 'tunisia', 'spain', 'costarica', 'germany', 'japan', 'belgium', 'canada', 'morocco', 'croatia', 'brazil', 'serbia', 'switzerland', 'cameroon', 'portugal', 'ghana', 'uruguay','korea'
        ]

        this.totalWords = this.library.length
        this.randomNumber = Math.round(Math.random() * this.totalWords)
        this.letterArray = []

        this.buttonStartId = document.querySelector ("#button-start-id")
        this.tipLetterButton = document.querySelector ("#tipLetter-button-id")

        this.buttonStartId.addEventListener("click",() => this.startGame())

        // Tip
        this.tipLetterButton.addEventListener("click",() => this.tipValue())
        
    }

    startGame() {
        this.wordChoiced = this.library[this.randomNumber]
        this.totalCharWordChoiced = this.library[this.randomNumber].length

        this.declareCubes()
        this.insertCubes()
        
    }

    // Declaring cubes
    declareCubes() {
        for (this.n = 0; this.n <= this.totalCharWordChoiced; this.n++) {
            this.letterArray[this.n] = document.querySelector ("#letter"+this.n)
        }
    }

    // Create function to insert the cubes
    insertCubes() {
        this.containerLetter = document.querySelector ("#container-letter-id")
        this.count = 1

        while (this.count <= this.totalCharWordChoiced) {
            console.log(this.wordChoiced)
            this.count++
        }

        this.widthCube = this.letterArray.length-1
        this.count2 = 1 
        while (this.count2 <= this.widthCube) {
            this.letterArray[this.count2].style.display = "inline-block"        
            this.count2++
        }
    }

    // Tip on alert
    tipValue() {
        alert(this.wordChoiced)
    }
}

let hangman = new Hangman()