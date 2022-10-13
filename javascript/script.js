class Hangman {

    constructor() {
        this.library = [
            'qatar', 'ecuardor', 'senegal', 'netherlands', 'england', 'iran', 'usa', 'wales', 'argentina', 'saudiarabia', 'mexico', 'poland', 'france', 'australia', 'denmark', 'tunisia', 'spain', 'costarica', 'germany', 'japan', 'belgium', 'canada', 'morocco', 'croatia', 'brazil', 'serbia', 'switzerland', 'cameroon', 'portugal', 'ghana', 'uruguay','korea'
        ]

        this.totalWords = this.library.length
        this.randomNumber = Math.round(Math.random() * this.totalWords)
        this.letterTyped = document.querySelector ("#container-hangman-letterTyped-id")
        this.hangmanMessenger = document.querySelector ("#container-hangman-messenger-id")
        this.letterJ = document.querySelector("#letterJ-id")
        this.gameOpen = false 
        this.arrayFinal = []
        this.drawing = []
        this.letterArray = []
        this.arrayRepeat = []
        this.hit = 0
        this.countArray = 0
        
        this.declarationDrawing()
        this.initialPosition()

        this.buttonStartId = document.querySelector ("#button-start-id")
        this.insertLetterButton = document.querySelector ("#insertLetter-button-id")
        this.tipLetterButton = document.querySelector ("#tipLetter-button-id")

        this.buttonStartId.addEventListener("click",() => this.startGame())
        this.insertLetterButton.addEventListener ("click", () => this.insertValues())
        this.tipLetterButton.addEventListener("click",() => this.tipValue())
        
    }


    declarationDrawing() {
        this.drawing[1] = document.querySelector ("#head-img-id")
        this.drawing[2] = document.querySelector ("#body-img-id")
        this.drawing[3] = document.querySelector ("#right-arm-img-id")
        this.drawing[4] = document.querySelector ("#left-arm-img-id")
        this.drawing[5] = document.querySelector ("#right-leg-img-id")
        this.drawing[6] = document.querySelector ("#left-leg-img-id")
    }

    initialPosition() {
        this.drawing[1].style.display = "none"
        this.drawing[2].style.display = "none"
        this.drawing[3].style.display = "none"
        this.drawing[4].style.display = "none"
        this.drawing[5].style.display = "none"
        this.drawing[6].style.display = "none"
    }

    startGame() {
        this.hangmanMessenger.innerHTML = ` `
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


    // Delete cubes created
    deleteCubes() {
        this.count4 = 1
        while (this.count4 <= this.widthCube) {
            this.letterArray[this.count4].style.display = "none"        
            this.count4++
        }
    }


    // Insert Letters
    insertValues() {
        if (this.gameOpen == false) {
            alert ("You should start the game.")
        } else if (this.letterJ.value.length == 0) {
            alert ("You should typed a letter")
            this.letterJ.value = ""
            this.letterJ.focus()
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
        
        this.count3 = 0
        this.letterTypedJ
        this.validator = true 

        //for (this.textCompare of this.arrayFinal) {
            for (this.textCompare2 of this.arrayRepeat) {
                if (this.textCompare2 == this.letterJ.value) {
                    alert ('You already typed this letter. Typed another.')
                    this.letterJ.value = ""
                    this.letterJ.focus()
                    this.validator = false 
                }  
            }
        //}

        if (this.validator == true) {

        for (this.textCompare of this.arrayFinal) {
            if (this.letterJ.value == this.textCompare || this.letterJ.value.toLowerCase() == this.textCompare) {
                console.log (this.letterJ.value)
                this.hangmanMessenger.innerHTML = `You hit. Congratulation and go on.`
                this.count3++
            } else {
                console.log ('wrong')
                this.letterJ.focus()
            }    
        }

        this.letterTypedJ = this.letterJ.value

        this.arrayRepeat[this.countArray] = this.letterJ.value
        this.countArray++

        this.letterJ.value = ""

        if (this.hit < 6 && this.count3 == 0) {
            this.hit++
            this.drawing[this.hit].style.display = "inline-block"
            this.hangmanMessenger.innerHTML = `You wrong. Try again!`
            this.letterTyped.innerHTML += this.letterTypedJ.toUpperCase() + ' '
            this.letterJ.value = ""
            this.letterJ.focus()
            console.log (this.arrayRepeat)
        } else if (this.hit >= 6) {
            this.initialPosition()
            this.deleteCubes()
            this.letterTyped.innerHTML = `Letter typed: `
            this.hangmanMessenger.innerHTML = `END GAME!`
            alert ('End game. Play again!')
            this.gameOpen = false 
        }
        } else {
            this.letterJ.value = ""
            this.letterJ.focus()
        }
    }    


    // Tip on alert
    tipValue() {
        alert(this.wordChoiced)
    }
}

let hangman = new Hangman()