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