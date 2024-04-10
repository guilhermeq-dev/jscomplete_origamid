const animals = document.getElementById('animais');
console.log(animals)

// Retorne no console todas as imagens do site

// const imgs = document.querySelectorAll('img')

// console.log(imgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem

// const images = document.querySelectorAll('.animais-lista img')
// console.log(images)

const img = document.querySelectorAll('img[src^="img/imagem"')

console.log(img)

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"')

const links = internalLinks.forEach((item, index) => {
  console.log(item, index)
})

// Selecione o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector('.animais-descricao h2:first-child')
console.log(firstH2)

// Selecione o último p do site

const lastParagraph = document.querySelector('.copy p:last-child')

console.log(lastParagraph)

const paragraphs = document.querySelectorAll('p')

console.log(paragraphs[paragraphs.length - 1].outerText)


// Mostre no console cada parágrado do site

const allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach((item) => {
  console.log(item)
})

// Mostre o texto dos parágrafos no console

allParagraphs.forEach((item) => {
  console.log(item.innerText)
})

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));

const menu = document.querySelector('.menu').classList
console.log(menu)

// Adicione a classe ativo a todos os itens do menu

const menuItems = document.querySelectorAll('.menu a')
menuItems.forEach((item) => {
  item.classList.add('ativo')
})
console.log(menuItems)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item) => {
  if (item.innerText !== 'ANIMAIS') {
    item.classList.remove('ativo')
  }
})
console.log(menuItems)
// Verifique se as imagens possuem o atributo alt
imgs.forEach((item) => {
  console.log(item.hasAttribute('alt'))
})
// Modifique o href do link externo no menu
menuItems.forEach((item) => {
  if (item.href === 'https://www.origamid.com/') {
    const link = item.href = "www.google.com"
    console.log(link)
  }
})