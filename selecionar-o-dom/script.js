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
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do ul apenas
const navItem = primeiroUl.querySelector('li');


// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

console.log(gridSection[1]); // retorna o segundo elemento
// Diferente do getElementsByClassName, a lista aqui é estática.