// Array
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
var videoGames = ['Switch', 'PS4', 'Xbox'];
videoGames[0] // 'Switch'
videoGames[2]  // 'Xbox'
// acesse um elemento do array utilizando nomeArray[n]


// Métodos e Propriedades de um Array
videoGames.pop(); // remove o ultimo item do array e retorna ele
videoGames.push('3DS'); // adiciona '3DS' ao final do array
videoGames.length; // 3
// Existem diversos outros métodos, como map , reduce, forEach e mais.


// For Loop
// Fazem algo repetidamente até que uma condição seja atingida

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
} // retorna contagem de 0 a 9
// o For Loop possui três partes: inicio, condição e incremento


// While Loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
} 
// Retorna de 0 a 9 no console
// o For Loop é o mais comum

for(var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
}
// Retorna cada item do array


// Break
// O loop irá parar caso encontre a palavra Break
for(var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}


// forEach
// forEach é um método que executa uma função para cada item do Array. É uma forma mais simples de utilizarmos um loop com arrays

videoGames.forEach(function(item) {
  console.log(item)
})
// O argumento item será atribuido dinamicamente
// Podemos passar os seguintes parâmetros: item, index e array


// Não se confunda com a sintaxe
var numero = 0;
var maximo = 50;
for (; numero < maximo;) {
  console.log(numero);
  numero++;
}
// Não aconselho escrever da forma acima, por mais que funcione normalmente

// Exercicios
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasGanhasBrasil = ['1959', '1962', '1970', '1994', '2002']

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copasGanhasBrasil.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`)
  ano++
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera')
    break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length -1];