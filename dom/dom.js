// Document Object Model (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser, possui diferentes métodos e propriedades
window.innerHeight; // Retorna a altura do browser
// Ao inspecionar um elemento com o chrome, você está vendo a representação oficial do DOM


// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
window.alert('Isso é um alerta');
alert('Isso mesmo'); // funciona também

document.querySelector('h1'); // seleciona a tag h1
document.body; // retorna o body

// window é o objeto global, por isso não precisamos escrever ele para usar seus métodos e propriedades.


// Node
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o ID
titulo.offsetHeight; // retorna o height do elemento

titulo.addEventListener('click', callback);
// ativa a função callback ao clicar no titulo.