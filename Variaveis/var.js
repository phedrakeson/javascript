// Variáveis são responsáveis por guardar dados na memória, inicia com VAR, LET ou CONST

var nome = "Gabriel";
var idade = 20;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

// Variaveis evitam repetição (DRY = Don't Repeat Yourself)

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal);

// Vírgula = Utiliza-se para criar mais de uma variável sem ter que repetir a palavra chave VAR, LET ou CONST

var sobrenome = 'Duarte',
  cidade = "Porto Alegre";

console.log(sobrenome, cidade);

// Não atribuir um valor a uma variável faz com que ela não tenha atribuição, ela fica vazia e mostra como 'undefined'

var indefinido;
console.log(indefinido);

// Nomes
// Os nomes podem iniciar com $, _ ou letras (podem conter numeros mas não podem iniciar com eles.)
// Case Sensitive = Nome é diferente de nome
// Não utilizar palavras reservadas (http://www.w3schools.com/js/js_reserved.asp)
// Camel Case = É comum ser nomeados como por exemplo: abrirModal

// Inválido

var function;
var 1possuiFaculdade;

// Válido

var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// Declarar
// Erro ao tentar utilizar uma variável que não foi declarada
// console.log(naoDefinido);

// Hoisting
// O JS joga primeiro para cima todas as variáveis sem seus conteúdos atribuídos, ou seja:

console.log(comida);
var comida = Pizza;
// Retorna undefined

var comida = Pizza;
console.log(comida);
// retorna Pizza

// Mudar o valor atribuído
// É possível mudar os valores atribuídos a variáveis declaradas com VAR e LET. Porém não é possível modificar valores das declaradas com CONST

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// retorna um erro

// Exercícios
// Declarar uma variável com o seu nome

var nome = 'Gabriel';

// declarar uma variavel com a sua idade

var idade = 20;

// declarar uma variavel com a sua comida favorita e não atribuir valor

var comidaFavorita;

// atribuir valor a sua comida favorita

comidaFavorita = 'Pizza';

// declarar 5 variaveis diferentes sem valores

var endereco,
    bairro,
    estado,
    cidade,
    cep;