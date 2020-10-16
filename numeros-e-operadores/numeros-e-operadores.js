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

// A Ordem Importa (Assim como na matemática)
// Começa por multiplicação e divisão, depois soma e subtração

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão

// Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++) // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// Mesma coisa para o decremento
// --x

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é uma frase';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (numero)
-idade; // -28 (numero)
console.log(+idade + 5); // 33


var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
// O - antes de um número torna ele negativo

// EXERCICIOS
// Qual o resultado da seguinte expressão?
var totalEx = 10 + 5 * 2 / 2 + 20;
console.log(totalEx); // 35

// Crie duas expressões que retornem NaN

var nan1 = '128bytes';
console.log(+nan1);

var nan2 = 'Oi' - 200;
console.log(nan2);

// Somar a string '200' com o número 50 e retornar 250

var x = '200';
var y = 50;
console.log(+x + y);

// Incremente o número 5 e retorne o seu valor incrementado

var increment = 5;
console.log(increment++);
console.log(increment);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)

console.log(pesoPorDois);
