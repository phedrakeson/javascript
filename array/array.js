// Arrays
// Arrays armazenam uma coleção de elementos . Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome){ console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul


// Construção de Arrays
// Toda Array herda os métodos e propriedades do protótipo do construtor Array
const carros = new Array('Corolla', 'Opala', 'Jetta');
carros[1]; // Opala
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11
// os valores de arrays não são estáticos


// Array.from()
// Array.from() é um método utilizado para transformar array-like objects, em uma array

let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // array

const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
} // Esse objeto precisa da propriedade length nele, se não não é possível fazer a conversão para uma array. 

const carrosArray = Array.from(carros);


// Array.isArray()
// verifica se o valor passado é uma array e retorna um valor booleano
Array.isArray(li); // false, nodelist

li = Array.from(li); // array
Array.isArray(li); // true


// Array.of(), Array() e new Array()
// Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave não é necessária para utilizar o construtor Array
Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [ , , , , ,]
Array(1,2,3,4); // [1,2,3,4]


// Propriedades e métodos do Prototype
// [].length retorna o tamanho do array
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; //6
frutas[1].length; // 5
frutas[2].length; // 2


// Métodos modificadores [].sort()
//  Os próximos métodos que vamos falar sobre , são métodos modificadoresa array original (mutator methods). Além de retornarem um valor, eles modificam a array original.  [].sort() organiza pelo unicode

instrumentos.sort(); 
instrumentos; // ['Baixo', 'Guitarra', 'Violão']

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // 1,12,21,32,33,43,8


// [].unshift() e [].push()
// [].unshift() adiciona elementos ao inicio da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length das mesmas

const carros = ['Ford', 'Kia', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Kia', 'VW']

carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Kia', 'VW', 'Ferrari]


// [].reverse()
// ELe vai simplesmente inverter a ordem da array e retornar ela.

const carros2 = ['Ford', 'Kia', 'VW', 'Honda'];
carros2.reverse(); // ['Honda', 'VW', 'Kia', 'Ford'];


// [].splice()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros3.splice(1,0,'Kia', 'Mustang'); // []
carros3; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros3.splice(3,2,'Ferrari'); ['Fiat', 'VW'];
carros3; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']


// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de inicio e final , ele irá utilizar como inicio o 0 e final o valor total da array
['Item 1', 'Item 2', 'Item 3', 'Item 4'].copyWithin(2, 0 , 3);
// ['Item 1', 'Item 2', 'Item 1', 'Item 2']

['Item 1', 'Item 2', 'Item 3', 'Item 4'].copyWithin(-1);
// ['Item 1', 'Item 2', 'Item 3', 'Item 1']


// [].fill()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim

['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Banana', 2);
// ['Item 1', 'Item 2', 'Banana', 'Banana']

['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Banana', 1, 3);
// ['Item 1', 'Banana', 'Banana', 'Item 4']


// Métodos de Acesso: [].concat()
// Os métodos abaixo não modificam o Array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Avião', 'Carro', 'Moto']

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Avião', 'Carro', 'Moto', 'Van']


// [].includes(), [].indexOf(), [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna um booleano.
// [].indexOf(valor) verifica se a Array possui o valor e retorna o index do primeiro valor na array.
// [].lastIndexOf(valor) já este vai retornar o index do ultimo valor selecionado.
const linguagens = ['cobol', 'ruby', 'js', 'php', 'python', 'js']

linguagens.includes('ruby'); // true
linguagens.includes('go'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5


// [].join()
// [].join(separador) junta todos os valores do array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array
linguagens.join(); // cobol,ruby,js,php,python,js
linguagens.join(' '); // cobol ruby js php python js
linguagens.join('-_-'); // cobol-_-ruby-_-js-_-php-_-python-_-js

let htmlString = '<h2> Titulo Principal </h2>'
htmlString = htmlString.split('h2');
// '<', '> Titulo Principal </' '>'
htmlString = htmlString.join('h1');
// <h1> Titulo Principal </h1>



// [].slice()
// [].slice(inicio, final) retorna os itens da array cortados, começando pelo inicio e indo até o valor do final

linguagens.slice(3); // cobol ruby js
linguagens.slice(1, 4); // ruby js php python

const cloneLinguagens = linguagens.slice();