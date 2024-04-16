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
    const link = item.href = "https://www.google.com"
    console.log(link)
  }
})

// Verifique a distância da primeira imagem
// em relação ao topo da página
//
const img2 = document.querySelector('img')
console.log(img2.offsetTop)

// Retorne a soma da largura de todas as imagens
const image = document.querySelectorAll('img')
let soma = 0;
image.forEach((item) => {
  const rect = item.getBoundingClientRect()
  console.log(rect)
  soma += rect.width
})
console.log(soma)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}

// Tipos de eventos

const imagem = document.querySelector('img');

// function callback(event) {
//   console.log(event.currentTarget) // this
//   console.log(event.target) // onde o click ocorreu
//   console.log(event.type) // tipo do evento
//   console.log(event.path) // caminho
// }

// imagem.addEventListener('click', callback);

// const listImage = document.querySelector('.animais-lista')

// listImage.addEventListener('click', callback)

//////

const link = document.querySelector('a[href^="http"]');

function handleExternalLink(event) {
  event.preventDefault();
  console.log('Clicou no link externo')
}

link.addEventListener('click', handleExternalLink)

function handleKeyboard(event) {
  if (event.key === 'v') {
    document.body.classList.toggle('azul')
  }
}

window.addEventListener('keydown', handleKeyboard)

// ////
function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'))
}

image.forEach((img) => {
  img.addEventListener('click', handleImg)
})

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault()
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((links) => {
  links.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const bodyAll = document.querySelectorAll('body *')

bodyAll.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(event.currentTarget)
  })
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// bodyAll.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     event.currentTarget.remove()
//   })
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickT)