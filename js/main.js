//aula1
//função com nome
function log(valor){
	console.log(valor);
}

log('teste1');

//função anônima, pode omitir nome da função desde que a função esteja atribuída a uma variavel 
//ou passada como parametro dentro de outra função
var log = function(valor){
	console.log(valor);
};

log('teste2');

var soma = function(a, b){
	return a + b;
}

console.log(soma(5,5));


//arrow functions =>
//são funções anonimas e devem ser utilizadas como as funções anonimas (atribuidas a variavel ou passada como parametro)
var soma2 = (a, b) => a+b;

console.log(soma2(5,15));

//se houver mais de uma instrução dentro da arrow function, utilizar chaves {}
var idade = a => {
	if(a >= 18){
		return "maior de idade";
	}else{
		return "menor de idade";
	}
}
console.log(idade(18));

//literais
var createObj = () => ({teste: 123});

console.log(createObj());

//função construtora
function Carro(){
	this.cor = 'azul';
}

console.log(new Carro());

//em javascript é possível chamar uma função classica antes de sua declaração, 
//mas isso não é possível no caso das arrows functions

//no exemplo abaixo, o obj faz uma referencia a ele msm
//o this referencia o proprio obj
//as funções em js tem um contexto de invocação, são executadas no contexto de onde são invocadas

var obj = {
	showContext: function showContext(){
		console.log(this);
	},
	log: function log(value){
		console.log(value);
	}

};

obj.showContext();

//fixar o contexto do obj2 na variavel this usando arrow function:

var obj2 = {
	showContext: function showContext(){
		
		setTimeout(() => {
			this.log('after 1000ms');
			},1000);
	},
	log: function log(value){
		console.log(value);
	}

};

obj2.showContext();


//default functions arguments
function multiplicacao(a = 2, b = 1){ //verifica se o tipo é undefined, se for, atribui 1 a b    
	return a * b;
}

console.log(multiplicacao(undefined,1));


//lazy evaluation
function randomNumber(){
	return Math.random()*10;
}

function multiplicacao2(a, b = randomNumber()){    
	return a * b;
}

console.log(multiplicacao2(5,2));


//enhanced object literals
//maneira classica de escrver objetos literais
var objLiteral = {
	prop1: 'Poty'
};
console.log(objLiteral);

//com ecma 6
var propriedade1 = 'Poty';
var objLiteral2 = {
	propriedade1
};
console.log(objLiteral2);


function metodo1(){
	console.log('metodo chamado');
}
var obj4 = {
	metodo1
};
obj4.metodo1();


var objSoma = {
	soma: function soma(a,b){
		return a+b;
	}
};

console.log(objSoma.soma(5,1));
console.log(objSoma);

var objSoma2 = {
	soma(a,b){
		return a+b;
	}
};

console.log(objSoma.soma(5,1));
console.log(objSoma2);



var propNome = 'teste';
var obj5 = {
	[propNome + ' concat']: 'valor propriedade'
};
obj5
console.log(obj5);

//aula 2
//rest operator ...   prototype do rest op é um array, disponiblizando os metodos para manipular arrays
function sum(...args){
	return args.reduce((acumulador,valor) => acumulador + valor, 0); //O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
}
console.log(sum(5,4,3,2,1));

//rest op e arrow functions
const sum2 = (a, b, ...rest) => { //rest op pode pegar parametros restantes passados para a função
	console.log(a,b,rest);
	console.log(a + b + rest.reduce((acumulador,valor) => acumulador + valor, 0));
};
console.log(sum2(1,2,3,4,5));

//spread operator ... pega tds os itens do array e transformar em parametros para a função
const multiply = (...args) => args.reduce((acumulado, valor) => acumulado * valor, 1);
const sum3 = (...spread) => {
	return multiply(...spread);
}
console.log(sum3(2,3,4,5)); //esperado 120

//spread op não se limita a listas
//pode ser utilizado em strings, arrays, objects(literais) e objetos iteraveis 
//função de quebrar os itens e repassar
const str = 'Poty Ferreira';
function logArgs(...args){ //outra forma seria não passar parametro e usar arguments no console.log
	console.log(args);
}
logArgs(...str);


const array = [1,2,3,4];
function logArgs2(){
	console.log(arguments);
}
logArgs2(...array);


//construir arrays
const array2 = [/*...array],*/ 5,6,7];     //array.concat([5,6,7])
console.log(array2);

const array3 = [...array2, ...array, 0, 0, 0];
console.log(array3);

const arrayClone = [...array];
console.log(arrayClone);

const objSpread = {
	test:123
};
const objSpread2 = {
	...objSpread,
	test2: 'teste2'
};
console.log(objSpread2);
//só pode consumir outros objects, pois os objetos literais não são elementos iteraveis
//não pode usar: const arr = [...objSpread];
//pode usar para construir outros objetos literais
const objEx = {
	test: 123
};
const objEx2 = {
	...objEx,
	test: 456
};
console.log(objEx2);


//gerar clones
const objEx3 = {
	test: 123
};
const objEx4 = {...objEx3};
console.log(objEx4);


//destructuring assignment em reactjs
//sem destructuring assignment arrays
var arrayDA = ['maçã', 'banana', 'laranja', ['tomate']];
var maca1 = arrayDA[0];
var banana1 = arrayDA[1];
var laranja1 = arrayDA[2];
var tomate1 = arrayDA[3][0];
console.log(maca1, tomate1);

//com destructuring assignment para destruir arrays
var [maca, banana, laranja, [tomate]] = ['maçã', 'banana', 'laranja', ['tomate']];
console.log(laranja, tomate);


//sem destructuring assignment objects
var objDA = {
	name:'Poty'
}
var name = objDA.name;

//com destructuring assignment para destruir objects
var {name} = objDA;
console.log(name);


//aula 3
//symbols e iterators
//A função Symbol() retorna um valor do tipo símbolo (symbol), 
//tem propriedades estáticas que expõem vários membros dos objetos nativos, 
//possuem métodos estáticos que expõem o registro de símbolos globais 
//e se parecem com uma classe de objeto nativo, 
//mas estão incompletos como construtor porque não suportam a sintaxe "new Symbol()" .
//Cada valor símbolo retornado de Symbol() é único. 
//Um símbolo pode ser usado como o identificador para propriedades de objetos; 
//esse é o único propósito do tipo de dado.
const idUnico = Symbol('ola');
console.log(idUnico);

//gerar propriedades 
const objSymbol = {
	[idUnico]: 'ola' 
};
console.log(objSymbol);

//well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

//Symbol sem ecma6
const arraySymbol = [1,2,3,4];
const it = arraySymbol[Symbol.iterator]();
while(true){
	let {value, done} = it.next();
	
	if(done){
		break;
	}
	console.log(value);
}


//symbol com ecma6
const arraySymbol2 = [1,2,3,4];
for(let value of arraySymbol2){
	console.log(value);
}
const string = 'Poty Ferreira';
for(let value of string){
	console.log(value);
}

const arraySymbolComSpread = [...string, ...arraySymbol2];
console.log(arraySymbolComSpread);


//iterators são uma interface
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Iteratores_e_geradores
const objIterator = {
	values: [5,6,7,8],
	[Symbol.iterator](){
		let i = 0;		
		return {
			next: () => {
				i++;
				return{
					value: this.values[i-1],
					done: i>this.values.length
				}
				
			}
		}
	}
};


const iterator = objIterator[Symbol.iterator]();
for(let value of objIterator){
	console.log(value);
}


//generators são funções com pausa e interagem atraves da interface de iterator
//O objeto Generator é retornado por generator function e conforme iterable protocol e o iterator protocol.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generator
function* numerosNaturais(){
	let num = 0;
	while(true){
		yield num;
		num++;
	}
}
const iterador = numerosNaturais();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

//usando generator como forma de construir iterador
const objGenerator = {
	values: [5,6,7,8],
	*[Symbol.iterator](){
		for(var i=0; i < this.values.length; i++){
			yield this.values[i];
		}		
	}
};

for(let valor of objGenerator){
	console.log(valor);
}


//aula 4
//callbacks e promises
//Uma função callback é uma função passada a outra função como argumento, 
//que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
//https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function
//Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") 
//representa um valor que pode estar disponível agora, no futuro ou nunca.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

const facaAlgoPromise = new Promise((resolve, reject) => {
	
	setTimeout(function(){
		resolve('primeiro dado');
		},1000);
	
} );

const facaOutraPromise = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve('segundo dado');
		},1000);
	
} );

facaAlgoPromise
	.then(dado => {console.log(dado); return facaOutraPromise})
	.then(dado2 => console.log(dado2))
	.catch(error => console.log(error));
	
	
//fetch
//A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, 
//tais como os pedidos e respostas. Ela também fornece o método global fetch() 
//que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
//https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
/*fetch('/data.json').then(responseStream => {
	responseStream.json().then(data => {
		console.log(data);
	})
});*/

//async /await
//A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas
//O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await	

const asyncTimer = () =>
	new Promise ((resolve, reject) => {
		setTimeout(() => {
			resolve(12345);
		}, 1000);
	});
	
const funcaoSimples = async () => {
	const dado = await asyncTimer();
	return dado;
};

funcaoSimples()
	.then(dado => {
		console.log(dado);
	})
	.catch(erro => {
		console.log(erro);	
	});
	
	
	
//programação assincrona node
//EventEmitter :  https://nodejs.org/api/events.html
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('usuariologado', dado =>{
	console.log(dado);
});

emitter.emit('usuario logado', {user: 'Poty'});

//aula 5
//testes, tdd e bdd
//tdd: https://www.devmedia.com.br/tdd-fundamentos-do-desenvolvimento-orientado-a-testes/28151
//bdd: https://medium.com/@elisabethmamede/bdd-e-teste-de-software-a708df3502e