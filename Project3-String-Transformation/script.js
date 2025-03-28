const inputBox = document.querySelector('.inputBox')
const lowerCaseEl = document.getElementById('lowercase')
const upperCaseEl = document.getElementById('uppercase')
const camelCaseEl = document.getElementById('camelcase')
const pascalCaseEl = document.getElementById('pascalcase')
const kebabCaseEl = document.getElementById('kebabcase')
const snakeCaseEl = document.getElementById('snakecase')
const trimEl = document.getElementById('trim')

const capitalizeWord = (word) => {
  const capital = word[0].toUpperCase() + word.substring(1, word.length)

  return capital
}

const pascalCaseTranformer = (string) => {
  const lowerCaseString = string.toLowerCase()
  const wordArray = lowerCaseString.split(' ')
  const capitalLetter = wordArray.map((word, i) => {
    return capitalizeWord(word)
  })

  return capitalLetter.join('')
}

function camelcaseMaker(string) {
  const lowerCaseString = string.toLowerCase()
  const wordArray = lowerCaseString.split(' ')
  const capitalLetter = wordArray.map((word, i) => {
    if (i == 0) {
      return word
    }

    return capitalizeWord(word)
  })

  return capitalLetter.join('')
}

const snakeCaseTransformer = (string) => {
  const lowerCaseString = string.toLowerCase()
  const wordArray = lowerCaseString.split(' ').join('_')

  return wordArray
}

inputBox.addEventListener('input', () => {
  const text = inputBox.value.trim()

  lowerCaseEl.innerText = text.toLowerCase()
  upperCaseEl.innerText = text.toUpperCase()
  camelCaseEl.innerText = camelcaseMaker(text)
  pascalCaseEl.innerText = pascalCaseTranformer(text)
  snakeCaseEl.innerText = snakeCaseTransformer(text)
  kebabCaseEl.innerText = text.toLowerCase().split(' ').join('-')
  trimEl.innerText = text.trim()
})
