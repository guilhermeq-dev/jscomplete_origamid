const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if (tabMenu.length && tabContent) {

  tabContent[0].classList.add('ativo')

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index)
    })
  })
}

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const john = new Pessoa('João', 20)

const maria = new Pessoa('Maria', 25)

const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

