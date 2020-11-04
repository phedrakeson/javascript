// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true
// Propriedades e métodos consistem em nome (chave) e valor


// Métodos
// É uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5) // 20

// Abreviaçao de area: function() {} para area() {} no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// Objeto serve para organizar o código em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random() // Numero aleatório

var pi = Math.PI;
console.log(pi); // 3.14
// MATH é um objeto nativo de Javascript. Já percebeu que console é um objeto e log() um método?


// Criar um Objeto
// Um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


// Dot Notation Get
// Acesse as propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // #84E

// Dot Notation Set
// Substitui o valor de uma propriedade utilizando o . e o = após  o nome da mesma

menu.backgroundColor = '#000' // ao fazer isso, substitui o valor da propriedade.

// Adicionar Propriedades e métodos
// Basta adicionar um novo nome e definir o valor

menu.color = 'blue'; // ao fazer isso com um nome de propriedade que não existe, irá criar essa propriedade no objeto, o mesmo vale para functions
menu.esconder = function() {
  console.log('Escondi')
}



// Palavra-chave THIS
// this irá fazer uma referência ao próprio objeto

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this , seria 60 pq ele pegaria o height fora do objeto. o this faz pegar o height de dentro do objeto.



// Protótipo e Herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
var menu = {
  width: 800,
}
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') //false
// hasOwnProperty() é um método de Object



// Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: 'Gabriel',
  sobrenome: 'Duarte',
  idade: 20,
  sexo: 'Masculino',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}
