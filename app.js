const names = [
  'Ana',
  'João',
  'Maria',
  'Pedro',
  'Mariana',
  'Carlos',
  'Luana',
  'Rafael',
  'Laura',
  'Fernando',
  'Carlos'
];

const totalNames = names.length;

for (var i = 0; i < totalNames; i++) {
  console.log(names[i])
  if (names[i] === "Carlos") {
    break
  }
}

const quadrado = {
  total: 4,
  area: ((lado) => lado * lado),
  // perimetro: function (lado) {
  //   return lado * this.total;
  // }
  perimetro: ((lado) => lado * quadrado.total)
}

console.log(quadrado.perimetro(20))

const carro = {
  modelo: 'Argo',
  portas: 4,
  anuncio: function () {
    return 'Este ' + this.modelo + ' possui ' + this.portas + ' portas' + ' e é da cor ' + this.cor;
  }
}

carro.cor = 'branca'

console.log(carro.anuncio())

// https://youmightnotneedjquery.com/

var numero = 80
var unidade = 'kg'
var peso = numero + unidade
var pesoPorDois = `${numero / 2} ${unidade}`

console.log(pesoPorDois)


function imc(peso, altura) {
  const imc = peso / (altura ** 2) // expoente de altura
  return imc
}

console.log(imc(77, 1.73))

// addEventListener('click', (() => console.log(imc(50, 1.60))))

//
function verifyTruthy(value) {
  if (value !== '') {
    console.log(value)
    return true
  }
}

console.log(verifyTruthy("Oi"))

function checkPerimeter(x) {
  console.log('Lado: ' + x)
  const lado = x, total = 4
  return `Perimetro: ${lado * total}`
}
console.log(checkPerimeter(5))

function fullName(firstName, lastName) {
  const completeName = `${firstName} ${lastName}`
  return completeName
}
console.log(fullName('Guilherme', 'Queiroz'))

function evenNumber(number) {
  if (number % 2 === 0) {
    return `${number} é um número par`
  } else {
    return `${number} é um número impar`
  }
}
console.log(evenNumber(3))

function typeOfData(value) {
  const type = typeof value
  return type
}
console.log(typeOfData({}))

addEventListener('scroll', (() => {
  console.log('teste')
}))

console.log(Math.PI)

console.log(Math.random())

console.log(Math.round(5 + 5 + 10 + 20 / 2))

const personalData = {
  first_name: 'Guilherme',
  last_name: 'Queiroz',
  age: 26,
  full_name: function () {
    const full_name = `${this.first_name} ${this.last_name}`
    return full_name
  }
}

console.log(personalData.full_name())

const car = {
  preco: 1000,
  portas: 4,
  marca: `Audi`
}
car.preco = 3000
console.log(car)

const dog = {
  raça: `labrador`,
  cor: `preto`,
  idade: 10,
  acao: function (event) {
    const latir = event
    if (latir) {
      return "Latindo ao ver homem"
    } else {
      return "Cachorro em paz"
    }
  }
}

console.log(dog.acao(true))

const btn = document.querySelector('.btn')

const string = 'Teste'

console.log(string.charAt(0))
console.log(string.length)
console.log(string.replace('este', 'estando'))
console.log(string.toLowerCase())

btn.addEventListener('click', (() => console.log('clicou')))
// btn.setPointerCapture()
// btn.after()
// btn.append()
// btn.animate()

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

const numbers = [2, 4, 6, 8, 11]

const numbersAreEven = numbers.every((num) => num % 2 === 0)

console.log({ numbersAreEven })

const numberAreEven = numbers.some((num) => num % 2 === 0)

console.log({ numberAreEven })

