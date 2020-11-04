// Tudo é Objeto
// Strings, numeros, boolean, objetos e mais, possuem propriedades e metodos, por isso sao objetos.

var nome = 'André';
nome.length; // 5
nome.charAt(1) // n
nome.replace('ré', 'rei') // Andrei
nome; // 'André'
// Uma string herda propriedades e metodos do constructor String() 


// Números
var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // 2
// Por um breve momento o numero é envolvido em um objeto (coerção) tendo assim acesso as suas propriedades e métodos



// Funções
function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado.toString(); // "function areaQuadrado(lado) {
//  return lado * lado
// }"
areaQuadrado.length(); // 1 (total de parâmetros)


// Elementos do DOM
<a class="btn">Clique</a>
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a class azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function(){
  console.log('Clicou')
})
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos DOM