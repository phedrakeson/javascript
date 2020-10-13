// Números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000 o "e" seguido de um numero condiz com a quantidade de zeros a ser aplicada ao número
var exp2 = 2e-2; // 0.02

// Precisão até cerca de 15 digitos, após isso ele dá uma arredondada no número

// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// lembrando que + em strings serve para concatenar (juntar)

// Operadores Aritméticos (Strings)
var soma = 100 + 50; // 10050 (string)
var subtracao = '100' - 50; // 50, pois no caso de subtração ainda é considerado o 100 como numero pois há uma tentativa de converter a string para number
var multiplicacao = '100' * '2'; // 200 , tenta converter a string para number antes de realizar a operação
var divisao = 'Comprei 10' / 2; // NaN (not a number)
// É possível verificar se uma variável é um número utilizando a função isNaN();

// NaN (Not a Number)
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg' string
var pesoPorDois = peso / 2; // NaN (Not a Number)
