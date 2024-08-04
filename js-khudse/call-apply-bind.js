//1) In JavaScript, the call method is a predefined method for functions. 
// It is used to invoke a function with a specified this value and arguments provided individually.

// They both call func with arguments 1, 2 and 3. The only difference is that func.call also sets this to obj.
// func(1, 2, 3);
// func.call(obj, 1, 2, 3);

//------------------------------------------------------------------------------------------------------------------------------

// Question 1 : Call with function inside object

const age = 10;
var person = {
    name: "Piyush",
    age: 20,
    getAge: function () {
        return this.age;
    }
}

var person2 = { age: 24 };
person.getAge.call(person2);

// Question 2 : Output

var status = '😎';

setTimeout(() => {
    const status = '😍';

    const data = {
        status: '🥑',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);



// Question 3 : Call printAnimals such that it prints all animals in object

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function () {
        console.log('#' + i + ' ' + this.species
            + ': ' + this.name);
    }
    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}

// Question 4 : apply to append an array to another

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array);

// Question 5 : Find min/max number in an array
const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));

//Question 6: this in a function is hard fixed so it wont point to anyother thing even if we are binding it to null.

function f() {
    // alert(this); // ?
}

let user = {
    g: f.bind(null)
};

user.g();


//Question 7: bind chaning doesnt exists and only will point to the first object it binded.

function f() {
    alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();


// Question 12 : Fix the code

function checkPassword(success, failed) {
    // let password = prompt("Password?", '');
    if (password == "Roadside Coder") success();
    else failed();
}

let users = {
    name: 'Piyush Agarwal',

    loginSuccessful() {
        console.log(`${this.name} logged in`);
    },

    loginFailed() {
        console.log(`${this.name} failed to log in`);
    },

};

checkPassword(users.loginSuccessful.bind(users), users.loginFailed.bind(user));

// Question 13 :  Explicit Binding with Arrow Function

const aged = 10;

var person = {
    name: "Piyush",
    aged: 20,
    getAgeArrow: () => console.log(this.aged),
    getAge: function () {
        console.log(this.aged);
    }
}

var person2 = { aged: 24 };
person.getAge.call(person2);
person.getAge.call(person2);

let inst =new Map();
inst.set(12);
console.log(inst);
