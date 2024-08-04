// This is how you write a constructor function in javascript.
function firstConstructor(name) {
    this.name = name;
}

firstConstructor.prototype.customFunc = function () {
    console.log('sayWhat');
}

// This is how you write a constructor function in javascript that tries inheriting the parent class.
function secondConstructor(name, title) {
    firstConstructor.call(this, name);
    this.title = title;
}

secondConstructor.__proto__ = Object.create(firstConstructor.__proto__);

secondConstructor.__proto__.constructor = secondConstructor;

let firstInst = new firstConstructor('Bilal');
console.log(firstInst);
firstInst.customFunc();

let secondInst = new secondConstructor('Illah', 'Saeed');
console.log(secondInst);

// The reason why hasOwnProperty or any other prototype properties are not visible in loops are because they are non enumarable.
// We can make our property as non enumarable by:

let obj = {
    glasses: 1
};

Object.defineProperty(obj, 'hidden', {
    value: 'secret',
    enumerable: false // Makes 'hidden' non-enumerable
});

for (let key in obj) {
    console.log(key); // Will not log 'hidden'
}

console.log(Object.keys(obj));

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

// alert( rabbit.jumps );
// delete rabbit.jumps;
// alert( rabbit.jumps );
// delete animal.jumps;
// alert( rabbit.jumps );

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("full");
alert(speedy.stomach); // apple
lazy.stomach = [];
lazy.eat("hungry");
// This one also has it, why? fix please.
alert(lazy.stomach); // apple

