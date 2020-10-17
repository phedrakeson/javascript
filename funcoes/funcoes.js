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


// Pode ou não retornar um valor
//  Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc2);
}

imc2(80, 1.80) // retorna o imc porque tem o console.log dentro da função
console.log(imc2(80, 1.80)); // retorna o imc e também undefined porque não existe um return dentro da função.


// Valores Retornados 
// Uma função pode retornar qualquer tipo de dado e até outras funções 

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!'
  } else if(idade >= 60){
    return true;
  } else {
    return false;
  }
}
// CUIDADO, retornar diferentes tipos de dados na mesma função não é uma boa ideia.


// Escopo
// Variáveis e funções definidas dentro de um bloco {} não são visíveis fora dele, ficam dentro de seu contexto.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para eu visitar.`
}
console.log(totalPaises); // Dá erro, pois totalPaises foi definido dentro de uma função/contexto e não pode ser acessado pelo lado de fora.



// Escopo Léxico
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer.
outrosDados() // retorna um erro.



// Hoisting
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc)
}