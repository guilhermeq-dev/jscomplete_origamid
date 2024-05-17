// const names = [
//   "Ana",
//   "João",
//   "Maria",
//   "Pedro",
//   "Mariana",
//   "Carlos",
//   "Luana",
//   "Rafael",
//   "Laura",
//   "Fernando",
//   "Carlos",
// ];

// const totalNames = names.length;

// for (var i = 0; i < totalNames; i++) {
//   console.log(names[i]);
//   if (names[i] === "Carlos") {
//     break;
//   }
// }

// const quadrado = {
//   total: 4,
//   area: (lado) => lado * lado,
//   // perimetro: function (lado) {
//   //   return lado * this.total;
//   // }
//   perimetro: (lado) => lado * quadrado.total,
// };

// console.log(quadrado.perimetro(20));

// const carro = {
//   modelo: "Argo",
//   portas: 4,
//   anuncio: function () {
//     return (
//       "Este " +
//       this.modelo +
//       " possui " +
//       this.portas +
//       " portas" +
//       " e é da cor " +
//       this.cor
//     );
//   },
// };

// carro.cor = "branca";

// console.log(carro.anuncio());

// // https://youmightnotneedjquery.com/

// var numero = 80;
// var unidade = "kg";
// var peso = numero + unidade;
// var pesoPorDois = `${numero / 2} ${unidade}`;

// console.log(pesoPorDois);

// function imc(peso, altura) {
//   const imc = peso / altura ** 2; // expoente de altura
//   return imc;
// }

// console.log(imc(77, 1.73));

// // addEventListener('click', (() => console.log(imc(50, 1.60))))

// //
// function verifyTruthy(value) {
//   if (value !== "") {
//     console.log(value);
//     return true;
//   }
// }

// console.log(verifyTruthy("Oi"));

// function checkPerimeter(x) {
//   console.log("Lado: " + x);
//   const lado = x,
//     total = 4;
//   return `Perimetro: ${lado * total}`;
// }
// console.log(checkPerimeter(5));

// function fullName(firstName, lastName) {
//   const completeName = `${firstName} ${lastName}`;
//   return completeName;
// }
// console.log(fullName("Guilherme", "Queiroz"));

// function evenNumber(number) {
//   if (number % 2 === 0) {
//     return `${number} é um número par`;
//   } else {
//     return `${number} é um número impar`;
//   }
// }
// console.log(evenNumber(3));

// function typeOfData(value) {
//   const type = typeof value;
//   return type;
// }
// console.log(typeOfData({}));

// addEventListener("scroll", () => {
//   console.log("teste");
// });

// console.log(Math.PI);

// console.log(Math.random());

// console.log(Math.round(5 + 5 + 10 + 20 / 2));

// const personalData = {
//   first_name: "Guilherme",
//   last_name: "Queiroz",
//   age: 26,
//   full_name: function () {
//     const full_name = `${this.first_name} ${this.last_name}`;
//     return full_name;
//   },
// };

// console.log(personalData.full_name());

// const car = {
//   preco: 1000,
//   portas: 4,
//   marca: `Audi`,
// };
// car.preco = 3000;
// console.log(car);

// const dog = {
//   raça: `labrador`,
//   cor: `preto`,
//   idade: 10,
//   acao: function (event) {
//     const latir = event;
//     if (latir) {
//       return "Latindo ao ver homem";
//     } else {
//       return "Cachorro em paz";
//     }
//   },
// };

// console.log(dog.acao(true));

// const btn = document.querySelector(".btn");

// const string = "Teste";

// console.log(string.charAt(0));
// console.log(string.length);
// console.log(string.replace("este", "estando"));
// console.log(string.toLowerCase());

// btn.addEventListener("click", () => console.log("clicou"));
// // btn.setPointerCapture()
// // btn.after()
// // btn.append()
// // btn.animate()

// function myFunction() {
//   var copyText = document.getElementById("myInput");
//   copyText.select();
//   navigator.clipboard.writeText(copyText.value);
//   console.log("Copied the text: " + copyText.value);
// }

// const numbers = [2, 4, 6, 8, 11];

// const numbersAreEven = numbers.every((num) => num % 2 === 0);

// console.log({ numbersAreEven });

// const numberAreEven = numbers.some((num) => num % 2 === 0);

// console.log({ numberAreEven });

// const videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// videoGames.forEach((item, index, arr) => {
//   console.log(item, index, arr); // pode ser passado esses 3 parametros dentro do forEach
// });

// const worldCup = ["1959", "1962", "1970", "1994", "2002"];

// for (i = 0; i < worldCup.length; i++) {
//   console.log(`O Brasil ganhou a copa de ${worldCup[i]}`);
// }

// worldCup.forEach((item) => {
//   console.log(`O Brasil ganhou a copa de ${item}`);
// });

// const fruits = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
//   if (fruits[i] === "Pera") {
//     break;
//   }
// }

// const lastFruit = fruits[fruits.length - 1]; // pegando ultimo item do array
// console.log(lastFruit);

// let scroll = 1000;

// scroll += 500;

// console.log(scroll);

// const possuiCasa = true;
// const possuiCarro = true;
// let darCredito = possuiCarro && possuiCasa ? true : false;
// // if (possuiCarro && possuiCasa) {
// //   darCredito = true
// //   console.log(darCredito)
// // } else {
// //   darCredito = false
// //   console.log(darCredito)
// // }
// console.log(darCredito);

// // Por qual motivo o código abaixo retorna com erros? Somente variável declarada com var fura o escopo
// {
//   var cor = "preto";
//   var marca = "Fiat";
//   var portas = 4;
// }
// console.log(cor, marca, portas);

// // Como corrigir o erro abaixo? R: Declarar a variável `dois` e alterar o retorno
// const dois = 2;
// function somarDois(x) {
//   return x + dois;
// }
// function dividirDois(x) {
//   return x / dois;
// }
// console.log(somarDois(4));
// console.log(dividirDois(6));

// // O que fazer para total retornar 500?
// const numero2 = 50;

// for (let numero = 0; numero < 10; numero++) {
//   console.log(numero);
// }

// const total = 10 * numero2;
// console.log(total);

// const total2 = [10, 20, 30, 40, 50].reduce((acc, item) => acc + item, 0);

// console.log(total2);

// LIÇÃO DE CASA DO JOÃO

const dateTest = new Date().toISOString();
console.log(dateTest);

const hj = new Date();

const banana = hj.setDate(hj.getDate() - 180);

const ontem = new Date(banana).toISOString();

console.log(ontem.split("T")[0]);

// Exemplo como estou pensando em usar no ajuste do monitor

const currentDate = new Date(); // pegando a data atual

const sixMonthsAgo = new Date(
  currentDate.getTime() - 180 * 24 * 60 * 60 * 1000
); // pegando o timestamp e reduzindo 180 dias (180 dias, 24 horas, 60 minutos, 60 segundos, 1000 milissegundos)

sixMonthsAgo.setUTCHours(0, 0, 0, 0); // remove o fuso-horário(?), zerando hora, minuto, segundo e milisegundo para pegar somente a data. Dúvida: Será que é necessário?

const sDateToISOString = sixMonthsAgo.toISOString(); // convertendo para isostring

const sDate = sDateToISOString.split("T").at(0); // pegando somente a data que é o necessário, e também no formato correto

console.log(sDate); // exemplo de retorno: 2021-09-30

// Dúvida: No monitor os valores de datas são nesse formato [2024-05-14], então não vou precisar pegar hora, minuto e segundo, somente a data?
