//Differences between arrow function and normal functions are listed below:

// 1) this operator behaves differently on normal and arrow functions.
// The value of this depends on how the function is called. It can refer to different objects in different contexts.To preserve the this context, you often need to bind it manually
// Arrow functions do not have their own this. They inherit this from the enclosing scope at the time they are defined.
function add() {
    console.log(this);
}

const addArrowBased = () => {
    console.log(this);
}
add(3, 4);
addArrowBased(4, 5);

// 2) arguments is a keyword which can be used in normal function but not in arrow functions.
function addAgain() {
    console.log(arguments);
}

function addAgain() {
    console.log(arguments + 'second one');
}

// Instead use args (spread) operator
const bad = (...args) => {
    console.log(args);
}

bad(1, 2, 3);

const addAgainArrow = () => {
    // console.log(arguments);
}
addAgain(14, 16)
addAgainArrow(12, 13);


// 3) Can be used as a constructor function and called with new
function Person2(name) {
    this.name = name;
}

let john = new Person2('John');

const Person = (name) => {
    this.name = name;
}

// let lilly = new Person('Lilly'); Arrow functions cannot be used as constructors;

// 4)  Arrow functions are not suitable for methods in objects, as they do not have their own this.

const obj1 = {
    value: 42,
    method: function () {
        return this.value;
    }
}

console.log(obj1.method());

const obj2 = {
    value: 42,
    method: () => {
        return this.value; // 'this' refers to the global object or undefined in strict mode
    }
}

console.log(obj1.method());
console.log(obj2.method());


const user ={
    name: 'Amit',
    sayName(){
        console.log(this.name);
    }
}

setTimeout(user.sayName, 1000); // Gives undefined.



var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2); // Gives 3 as an output.
