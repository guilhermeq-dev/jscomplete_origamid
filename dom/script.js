

const text = document.querySelector('h1')

console.log(text.innerText)

console.log(text.classList)

text.addEventListener('click', () => {
  console.log('Clicou em', text.innerText)
})

const url = window.location.href

console.log(url)

const hrefIsTrue = (url === 'http://127.0.0.1:5500/dom/index.html') ? true : false

console.log(hrefIsTrue)

const activeElement = document.querySelector('.teste')

const language = window.navigator.language

console.log(language)

const width = window.innerWidth

console.log(width)