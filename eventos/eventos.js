// addEventListener 
// Adiciona uma função ao elemento, esta chamada de callback que será ativada assim que certo evento ocorrer nesse elemento.
const img = document.querySelector('img');

// evento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('clicou')
})
// o terceiro parametro é opcional


// Callback
// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

function callback() {
  console.log('clicou');
}

img.addEventListener('click', callback); // correto
img.addEventListener('click', callback()); // errado! dá undefined
img.addEventListener('click', function() {
  console.log('clicou')
}) // funciona também

img.addEventListener('click', () => {
  console.log('clicou')
}) // também funciona



// Event
// É o primeiro parâmetro do callback e é referente ao evento que ocorreu,
function callback(event) {
  console.log(event)
}

img.addEventListener('click', callback);
// geralmente utilizam   e   como nome do parâmetro


// Propriedades do Event
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path) ;
}
animaisLista.addEventListener('click', executarCallback);


// event.preventDefault()
// Previne o comportamento padrão do evento no Browser . caso de um link externo, por exemplo, irá prevenir que o link seja ativado.
const linkExterno = document.querySelector('a[href^="http"');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);


// this
// A palavra this é uma palavra especial do JS, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado

function callback(event) {
  console.log(this); // retorna a img
  console.log(this.getAttribute('src')); 
}

img.addEventListener('click', callback);
//geralmente igual ao event.currentTarget


// Diferentes Eventos
// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos , como window e document também.
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


// Keyboard 
// Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
function handleKeyboard(event) {
if (event.key === 'a') 
  document.body.classList.toggle('azul');
else if(event.key === 'v')
  document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);



// forEach e Eventos
// O método addEventListener é adicionado a um unico elemento, entao é necessário um loop entre elementos de uma lista para adicionarmos a cada um deles.
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

img.forEach((img) => {
  img.addEventListener('click', imgSrc);
})