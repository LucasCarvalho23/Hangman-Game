class Hangman {

    constructor() {
        this.library = [
            'qatar', 'ecuardor', 'senegal', 'netherlands', 'england', 'iran', 'usa', 'wales', 'argentina', 'saudiarabia', 'mexico', 'poland', 'france', 'australia', 'denmark', 'tunisia', 'spain', 'costarica', 'germany', 'japan', 'belgium', 'canada', 'morocco', 'croatia', 'brazil', 'serbia', 'switzerland', 'cameroon', 'portugal', 'ghana', 'uruguay','korea'
        ]

        this.totalWords = this.library.length
        this.randomNumber = Math.round(Math.random() * this.totalWords)
        this.letterArray = []
        this.letterJ = document.querySelector("#letterJ-id")
        this.gameOpen = false 
        this.arrayFinal = []

        this.buttonStartId = document.querySelector ("#button-start-id")
        this.insertLetterButton = document.querySelector ("#insertLetter-button-id")
        this.tipLetterButton = document.querySelector ("#tipLetter-button-id")

        this.buttonStartId.addEventListener("click",() => this.startGame())
        this.insertLetterButton.addEventListener ("click", () => this.insertValues())
        this.tipLetterButton.addEventListener("click",() => this.tipValue())
        
    }

    startGame() {
        this.gameOpen = true 
        this.wordChoiced = this.library[this.randomNumber]
        this.totalCharWordChoiced = this.library[this.randomNumber].length

        this.declareCubes()
        this.insertCubes()

        this.letterJ.focus()

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


    // Insert Letters
    insertValues() {
        if (this.gameOpen == false || this.letterJ.value.length == 0) {
            alert ("You should start the game.")
        } else {
            this.arrayFinal = this.wordChoiced.split('')
            this.receiveValues()
            this.compareValues()
        }
    }


    // input of the word receive the values the ArrayFinal
    receiveValues() {
        for (this.textCompare of this.arrayFinal) {
            this.letterArray[this.textCompare] = this.textCompare
        }
    }


    // Compare values and print
    compareValues() {
        for (this.textCompare of this.arrayFinal) {
            if (this.letterJ.value == this.textCompare || this.letterJ.value.toLowerCase() == this.textCompare) {
                console.log (this.letterJ.value)
            } else {
                console.log ('wrong')
                this.letterJ.focus()
            }    
        }

        this.letterJ.value = ""
    }


    // Tip on alert
    tipValue() {
        alert(this.wordChoiced)
    }
}

let hangman = new Hangman()