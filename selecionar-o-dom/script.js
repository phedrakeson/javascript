// ID
// getElementById seleciona e retorna elementos do DOM
// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste')



// Classe e Tag
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's. retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// retorna o primeiro elemento
console.log(gridSection[0]);


// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS

const animais = document.querySelector('.animais');
console.log(animais);
const contatos = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do ul apenas
const navItem = primeiroUl.querySelector('li');


// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const gridSections = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

console.log(gridSection[1]); // retorna o segundo elemento
// Diferente do getElementsByClassName, a lista aqui é estática.

// HTMLCOLLECTION VS NODELIST
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens


// ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.





// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log(imagensSite);


// Mostre no console cada parágrado do site
const paragrafosSite = document.querySelectorAll('p');
paragrafosSite.forEach((item) => console.log(item));
// Mostre o texto dos parágrafos no console
paragrafosSite.forEach((item) => console.log(item.innerText));
// Como corrigir os erros abaixo:
const imgss = document.querySelectorAll('img');

imgss.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgss.forEach( () => {
  console.log(i++);
});

imgss.forEach(() => i++);

