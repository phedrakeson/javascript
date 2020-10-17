// Funções
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16 
areaQuadrado(5); // 25
areaQuadrado(2); // 4
// chamada de function declaration

function pi() {
  return 3.14;
}

var total = 5 * pi(); 15.7
// Parênteses () executam uma função


// Parâmetros e Argumentos
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// Peso e altura são parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) //  60 e 1.70 são os argumentos
// Separar por vírgula cada parâmetro, você pode utilizar mais de um ou então nenhum parâmetro em uma função.



// Parênteses executa a função
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu.';
  } else if(cor === 'verde') {
    return 'Você gosta da floresta.'
  } else {
    return 'Você não gosta de nada.'
  }
}

corFavorita(); // retorna 'você nao gosta de nada'
// Se não chamarmos uma função, mesmo ela sendo definida, nada que está dentro dela irá ser executado.


// Argumentos podem ser funções
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function() {
  console.log('Clicou.')
})
// A função possui dois argumentos, primeiro é a string 'click' e segundo é a função anônima.
// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {} (arrow function)