//console.log(new String('Evgen'))
//console.log(new Number(10))
//console.log([])

// function Person(name) {
// 	this.name = name;
// 	this.Yo = function () {
// 		console.log('Yo')
// 	}
// }
//
// Person.prototype.bye = function() {
// 	console.log('Bye')
// }
//
// let t = new Person('Evgen');
//
// console.dir(Person)
// console.log(t)
// console.log(t.__proto__ === Person.prototype);
//
// let t2 = new Person('Evgen');
// console.log(t.Yo === t2.Yo)

// Array.prototype.sum = function() {
// 	return this.reduce((acc, item) => acc + item, 0);
// }
//
// let arr = [1, 2, 3];
//
// console.log(arr.sum());
//
// function sym( arr) {
// 	return arr.reduce((acc, item) => acc + item, 0);
// }



// function Person(name) {
// 	this.name = name;
// }
//
// Person.prototype = {}


// class Test {
//
// }
//
// Test.prototype = {}
//
// let t = new Test();
//
// console.log(t.__proto__ === Test.prototype)
//
// t.__proto__.hi = function () {
// 	console.log('HI')
// }
//
// console.dir(Test)


// Task 5
// Function.prototype._bind = function (ctx, ...args) {
// 	const _this = this;
// 	return function () {
// 		return _this.apply(ctx, args);
// 	}
// }
//
// Function.prototype.__bind = function (ctx, ...args) {
// 	return (...ar) => {
// 		return this.apply(ctx, [...args, ...ar]);
// 	}
// }

Function.prototype.___bind = function (ctx, ...args) {
	ctx.__temp__ = this;
	return function (...a) {
		return ctx.__temp__(...args, ...a);
	}
}

function f(a, b) {
	console.log('Foooo', this)
	// console.log(a)
	// console.log(b)
}

//f()

let obj = {
	name: 'Evgen',
}

let obj2 = {
	name: 'Vlad',
}

// let res = f.bind(obj, 50).bind(obj2, 800);
// res(10)

let res2 = f.___bind(obj, 50).___bind(obj2, 800);
//res2(0)


// ctx = {Evgen}, ...args = 50, __temp__ = f;
// ctx ={Vlad}, ...args = 800, __temp__ = (...a) => {evgen, __temp__ = f}
//	(0) => (...a//0) => {vlad, (...a) => {evgen, __temp__ = f}} => (800, 0) => (50, 800) => f

// console.log('obj', obj)
// console.log('obj2', obj2)

//
// function Monster(){};
// Monster.prototype.growl = () => console.log('Grr!');
//
// console.log(new Monster().growl === new Monster().growl);
//
// class Test2 {
// 	//grow = () => {console.log('Grr!')};
// 	grow () {console.log('Grr!')};
// }
//
// console.log(new Test2().growl === new Test2().growl);




function Animal(size, type) {
	this.type = type || 'Animal';
	this.canTalk = false;
}

Animal.prototype.speak = function() {
	if (this.canTalk) {
		console.log('It spoke!');
	}
}

let Pet = function(size, type, name, owner) {
	Animal.call(this, size, type);
	this.size = size;
	this.name = name;
	this.owner = owner;
}

Pet.prototype = Object.create(Animal.prototype);
let pet1 = new Pet();

console.log(pet1);