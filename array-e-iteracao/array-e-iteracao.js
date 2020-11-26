// [].forEach()
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item do array), index (index do valor no array) e array (array original)

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com arrow function

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

// o método sempre retorna undefined.


// Arrow Function
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});


// Modificar a Array Original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original
carros.forEach((item, index, array) => {
  array[index] = carro + item;
});

carros; // ['carro ford' , 'carro fiat', 'carro honda']

// é melhor utilizarmos o map para isso.


// [].map()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração
const newCarros = carros.map((item) => {
  return 'carro' + item;
});

carros; // ford, fiat, honda
newCarros; // carro ford, carro fiat, carro honda

// o map serve para quando eu quiser retornar a array com as modificações feitas, pois o [].forEach apenas vai retornar undefined.


// Valor Retornado
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.
const newCarros = carros.map((item) => {
  const novoValor = 'carro' + item;
});

newCarros; // undefined, undefined, undefined


// arrow function e [].map()
// Uma arrow function de linha única e sem chaves irá retornar o valor após o fat arrow =>
const numeros = [2,4,6];
const numerosX2 = numeros.map(n => n * 3);
numerosX2; // 4, 8, 12


// [].map() com Objetos
// Map pode ser muito útil para interagirmos com um array de objetos, onde desejamos isolar um valor único de cada objeto

const aulas = [
  {
    nome: 'HTML',
    min: 15,
  },

  {
    nome: 'HTML 2',
    min: 10,
  },

  {
    nome: 'CSS 1',
    min: 20,
  },

  {
    nome: 'JS 1',
    min: 25,
  },
]


const tempoAulas = aulas.map(aula => aula.min)


// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item do array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas = [10,25,30];
const total1 = aulas.reduce((acumulador, total) => {
  return acumulador + total; 
}); 
total1; // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165


// Maior valor com [].reduce()
const numeros = [10, 25, 60, 5, 35, 10];
const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

const maiorValor = numeros.reduce((anterior, atual) => {
  if(anterior > atual)
    return anterior
  else
    return atual
}, 0);

maiorValor; // 60



// [].reduceRight()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para esquerda, enquanto o reduce itera da esquerda para direita
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva pera banana
frutasLeft; // banana pera uva


// [].some()
// [].some() se pelo menos um return da iteração for truthy ele retorna true
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
});

function maiorQue100(numero) {
  return numero > 100;
}

const numeros = [0, 43, 22, 101, 82, 2];

const temMaior = numeros.some(maiorQue100); // true

// [].every()
// já com esse método, ele retorna true se todos os returns das iterações forem truthy. Se pelo menos uma for falsy, ele retornará false.

const frutas2 = ['Banana', 'Maçã', '', 'Uva Verde'];
const arrayCheia = frutas2.every((fruta) => {
  return fruta; // false
});

const numerosLista = [4,11,56,89,898,5578];
const numeroMaiorQue3 = numerosLista.every((numero) => {
  return numero > 3; // true
});

// o retorno é falso pq a array contém um valor vazio ( '' ) que é false.


// [].find() e [].findIndex()
// [].find() retorna o valor atual da primeira iteração que retornar um valor truthy.
// [].findIndex() ao invés de retornar o valor, ele retorna o index deste valor truthy na array
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
}); // 2

const buscaMaior45 = numerosLista.find(numero => numero > 45); // 56


// [].filter()
// retorna um array com a lista de valores que durante a sua iteração retornaram o valor truthy
const cesta = ['Banana', undefined, null, '', 'Maçã', 0, 'Kiwi'];
const arrayLimpa = cesta.filter((fruta) => {
  return fruta;
}); // 'Banana', 'Maçã', 'Kiwi'
