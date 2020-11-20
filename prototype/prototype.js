// Prototype
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);
console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

// funcao.prototype
// É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto

// Acesso ao protótipo
// Objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade e funcoes apenas
const andre = new Pessoa('André', 28);

andre.nome;
andre.idade;
andre.andar();
andre.nadar();

// proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade ___proto___. É papel da engine fazer essa busca, não devemos falar com ___proto___ diretamente.
andre.__proto__.andar(); // undefined Pessoa Andou
// caso tente acessar pelo __proto__ vai dar esse erro, pois ele não vai passar pelo objeto da função construtora.



// Herança de Protótipo
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos , mas são herdados do protótipo de Object.
Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();


// Construtores Nativos
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos , que poderão ser acessadas pelo tipo de dado
const pais = 'Brasil';
const cidade = new String('Rio');
pais.charAt(0); // B
cidade.charAt(0); // R
String.prototype;


// É possível acessar a função do protótipo
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array
const lista = document.querySelectorAll('li');
// transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
// existe o método Array.from()

// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo
Array.prototype.slice.call(lista);
Array.from(lista);

//retorna uma lista com os métodos/propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado.constructor.name , retorna o nome do construtor

// Apenas os Métodos do Protótipo são Herdados
[1,2,3].slice(); // existe
[1,2,3].from(); // não existe


// Entenda o que está sendo retornado
// Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse . 
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
} 

Carro; // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar() // Boolean
Carro.marca.charAt // function
Carro.marca.charAt(0) // string