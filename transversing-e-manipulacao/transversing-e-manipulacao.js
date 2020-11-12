// outerHTML, innerHTML e innerText
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas 
// Element.innerText = 'Novo texto'

const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


// Transversing
// Como navegar pelo DOM, utilizando suas propriedades e métodos

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // ultimo filho

lista.querySelectorAll('li'); // seleciona todos LI's
lista.querySelector('li:last-child'); // seleciona o ultimo filho


// Element vs Node
// Element's representam um elemento html, ou seja, uma tag. Node representa um nó,e pode ser um elemento (element), texto, comentário, quebra de linha e mais.
const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; //  todos os node child
// geralmente estamos atrás de um elemento e nao de qualquer node em si


// Manipulando Elementos
// É possível mover elementos no DOM com métodos Node
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');