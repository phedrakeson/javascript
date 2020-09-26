var nome = 'André';
var idade = 28;
var time = null;
var simbulo = Symbol();
console.log(typeof nome);

// Você pode concatenar, juntar duas ou mais strings utilizando +
var nome = 'Paulo';
var sobrenome = 'Soares';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// sempre ao somar um numero a uma string, no fim acaba sendo apenas uma string
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols.';
console.log(frase);

// template string
// você pode passar expressões e variáveis dentro de uma string com ${}
var gols = 1000;
var frase = `Romário fez ${gols} gols.`;
// e também pode multiplicar essa template string
var frase = `Romário fez ${gols * 2} gols.`;

// EXERCICIOS

// Declare uma variável contendo uma string
var nome = 'Gabriel';
// Declare uma variável contendo um número dentro de uma string
var frase3 = '2018';
// Declare uma variável com a sua idade
var idade = 20;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Gabriel';
var sobrenome = 'Duarte';
var nomeCompleto = `${nome} ${sobrenome}`;
// Coloque a seguinte frase em uma variável: It's time
var frase4 = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
