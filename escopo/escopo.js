// Escopo da função
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // erro, carro is not defined
// escopo evita o conflito entre nomes.


// Variável Global (ERRO)
// Declarar uma variável sem as palavras chaves var, let ou const cria uma variável que pode ser acessada em qualquer escopo (global) e isso é um erro.
function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
// 'use strict' impede isso.

// Escopo da função (Pai)
// Variáveis declaradas no escopo pai da função conseguem ser acessadas pelas funções.
// Nunca pode ser acessada de dentro pra fora, apenas de fora pra dentro ou no escopo em que já está.



// Escopo de Bloco
// Variáveis criadas com var , vazam o bloco. Por isso com a introdução do ES6+ a melhor forma de declararmos uma variável é utilizando const e let pois estas respeitam o escopo do bloco.
if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Fusca

// {} criam um bloco
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos (objeto = {})
{
  var carro = 'Fusca';
  const ano = 2018;
}

console.log(carro); // Fusca
console.log(ano); // Erro, is not defined (const e let não vazam do escopo de bloco)


// For Loop
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.

for(var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // 10


// ==================================================================================================
// Const
// Mantém o escopo do bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
const mes = 'Dezembro';
mes = 'Janeiro'; // Erro, tentou modificar o valor
const semana; // Erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // funciona
data = 'Janeiro'; //erro

// Variáveis com valores constantes


// Let
// Mantém o escopo do bloco, impede a redeclaração mas permite a modificação do valor da variável
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // Erro, tentou redeclarar a variavel.
// geralmente vamos utilizar const




// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
// console.log em var é um erro, marca e portas também pois a unica que vai vazar o escopo de bloco é a variavel cor que está declarada como VAR.

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2;
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
