const formBtn = document.querySelector('form')
const inputBox = document.querySelector('.inputBox')
const submitBtn = document.querySelector('.submitBtn')
const startBtn = document.querySelector('.startBtn')
const resultsEle = document.querySelector('.results')
const guesses = document.querySelector('.guesses')

let randomNumber = parseInt(Math.floor(Math.random() * 100 + 1))
let guessingNumber = []

const startGame = () => {
  guessingNumber.length = 0
  resultsEle.innerHTML = ''
  guesses.innerHTML = ''
  randomNumber = parseInt(Math.floor(Math.random() * 100 + 1))
  submitBtn.disabled = false
  startBtn.disabled = true
  startBtn.style.cursor = 'not-allowed'
  submitBtn.style.cursor = 'pointer'
  inputBox.value = ''
}

const guesstheNumber = () => {
  let inputNumber = Number(inputBox.value)

  if (randomNumber == inputNumber) {
    resultsEle.innerHTML = `Congrats! You guess it right..`
    startBtn.disabled = false
    startBtn.style.cursor = 'pointer'
  } else if (randomNumber > inputNumber) {
    resultsEle.innerHTML = `Too Low!`
  } else {
    resultsEle.innerHTML = `Too High!`
  }

  if (guessingNumber.length >= 9) {
    submitBtn.disabled = true
    startBtn.disabled = false
    submitBtn.style.cursor = 'not-allowed'
    startBtn.style.cursor = 'pointer'
  }

  guessingNumber.push(inputNumber)
  console.log(guessingNumber)
  guesses.innerHTML = `Your Guesses: ${guessingNumber}`
  inputBox.value = ''
}

formBtn.addEventListener('submit', () => {
  guesstheNumber()
})

startBtn.addEventListener('click', () => {
  startGame()
})
