// Boolean
// Existem dois valores booleanos, true ou false

var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else
// Verificar se uma expressão é verdadeira com If, caso contrário o else será ativado

var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// O valor dentro dos parenteses sempre será avaliado em false ou true

// Condicionais Else If
// Se If não for verdadeiro, ele checa as condições Else If

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não doutorado')
} else {
  console.log('Não possui graduação e nem doutorado')
}

// Truthy e Falsy
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if (false)
if (0) // ou -0
if (NaN)
if (null)
if (undefined)
if ('') // ou "" ou ``
// todo o resto é truthy
// Truthy
if (true)
if (1)
if ('  ')
if ('André')
if (-5)
if ({})

// Operador Lógico de Negação !
// O operador ! nega uma operação booleana. Ou seja, !true é igual a false (ele inverte)
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true 
if(!undefined) // true
if(!!'  ') // true
if(!!' ') // false
// DICA: Você pode utilizar !! para verificar se uma expressão é truthy ou falsy

// Operadores de Comparação
// Vão sempre retornar um valor booleano (verificando)
10 > 5 // true
5 > 10 // false
20 < 10 // false
10 <= 10 // true
10 >= 11 // false

// Operadores de Comparação
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10' // true
10 == 10 // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// Operadores Lógicos &&
// && compara se uma expressão e a outra é verdadeira (true)
true && true // true
true && false //false
false && true // false
'gato' && 'cao' // 'cao'
(5 - 5) && (5 + 5) // 0
'gato' && false // false
(5 >= 5) && (3 < 6) // true
// se ambos os valores forem true ele irá retornar o ultimo valor verificado, se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos


// Operadores Lógicos ||
// || compara se uma expressão ou outra é verdadeira
true || true // true
true || false // true
false || true // true
'gato' || 'cao' // 'gato'
(5 - 5) || (5 + 5) // 10
'gato' || false // gato
(5 >= 5) || (3 < 6) // true
// retorna o primeiro valor true que encontrar


// Switch
// Com o switch você pode verificar se uma variável é igual a diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira

var corFavorita = 'Preto'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  
  case 'Vermelho':
    console.log('Olhe para rosas');
    break;
  
  case 'Preto':
    console.log('Feche os olhos');
    break;

  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  
  default:
    console.log('Pense em uma cor em especial.')
}

// EXERCICIOS
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idade1 = 20;
var idade2 = 19;

if(idade1 < idade2) {
  console.log('É menor');
} else if(idade1 === idade2) {
  console.log('É igual');
} else if(idade1 > idade2) {
  console.log('É maior.')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// verdadeiro

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// 'Cão'