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
