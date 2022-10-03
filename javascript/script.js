let library = [
    'qatar', 'ecuardor', 'senegal', 'netherlands', 'england', 'iran', 'usa', 'wales', 'argentina', 'saudiarabia', 'mexico', 'poland', 'france', 'australia', 'denmark', 'tunisia', 'spain', 'costarica', 'germany', 'japan', 'belgium', 'canada', 'morocco', 'croatia', 'brazil', 'serbia', 'switzerland', 'cameroon', 'portugal', 'ghana', 'uruguay','korea'
]
let amount = library.length-1
let position = Math.round(Math.random() * amount)
let word = library[position]
let heightWord = word.length
let letterBox = []
let hits 
let errorMax = 7
let errors = 0
let drawing = []
let gotItRight = false
let playing = false 
let letterJ = document.querySelector ("#letterJ-id")

function startGame() {
    playing = true 
    letterJ.value = ""
    letterJ.focus()
    hits = 0
    errors = 0
    gotItRight = false 
    document.querySelector("#container-hangman-letterTyped-id").innerHTML = `Letter typed: `
    position = Math.round(Math.random() * amount)
    word = library[position]
    heightWord = word.length

    defineLetter(heightWord)

    document.querySelector("#container-hangman-messenger-id").innerHTML = ``

    drawing[1] = document.querySelector("#head-img-id")
    drawing[2] = document.querySelector("#body-img-id")
    drawing[3] = document.querySelector("#right-arm-img-id")
    drawing[4] = document.querySelector("#left-arm-img-id")
    drawing[5] = document.querySelector("#right-leg-img-id")
    drawing[6] = document.querySelector("#left-leg-img-id")
    document.querySelector("#head-img-id").src = "./images/head.png"

    for (let count = 1; count < 7; count++) {
        drawing[count].style.display = "none"
    }

}


function defineLetter(l) {
    let obj
    for (let count = 0; count < 20; count++) {
        obj.document.querySelector("letter" + count).value = ""
        obj.document.querySelector("letter" + count).style.display = "none"
    }
    for (let count = 0; count < l; count++) {
        obj.document.querySelector("letter" + count).style.display = "inline-block"
    }
}


function tipLetter() {
    alert (word)
    letterJ.focus()
}


function insertLetter() {
    letterJ.focus()

    if (letterJ.value == "") {
        alert ('Type a letter')
    } else {

        if (playing) {
            let obj
            let letterTmp
            let letter
            let searchLetter

            letter = letterJ.value
            letterJ.value = ""
            searchLetter = word.match(letter)
            gotItRight = false

            while (searchLetter != null) {
                letterTmp = word.search(letter)
                obj = document.querySelector("letter" + letterTmp).value = letter
                word = word.replace(letter, '0')
                hits++
                searchLetter = word.match(letter)
                gotItRight = true
            }

            if (!gotItRight) {
                document.querySelector('#container-hangman-letterTyped-id').innerHTML += letter.toUpperCase()
                errors++

                if (errors < 7) {
                    drawing[errors].style.display = "block"
                } else {
                    document.querySelector ("#head-img-id").src = "./images/head-end.png"
                    document.querySelector ("#container-hangman-messenger-id").innerHTML = `You lose`
                    playing = false
                }

            }

            if (hits == heightWord) {
                document.querySelector ("#container-hangman-messenger-id").innerHTML = ``
                document.querySelector ("#container-hangman-messenger-id").innerHTML = `You win. Congratulations!`
                playing = false
            }

        }

    }

}


window.addEventListener("load", startGame)