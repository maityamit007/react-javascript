//First class functions are nothing but call back functions that are executed and passed as parameters.

function square(a, b) {
    return a * b;
}

function greet(fn) {
    return square;
}

let ans = greet(square);
console.log(ans(2, 2));


(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);


var num1 = 20,
    num2 = 3,
    name = "Maity Scope";

function mul() {
    return num1 * num2;
}
console.log(mul());

//First looks for inner scope then it goes for outer if not found!
function getScore() {
    var num1 = 3,
        num2 = 4;
    function add() {
        return name + " scored " + (num1 + num2);
    }
    return add();
}
console.log(getScore());

//Hoisting questions
//This is caused because using var we have "function scoped" which causes the scoping problem and then increments value of i
//This can be solved using self invoking function that creates a new scope.
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        // 3 times 5
        console.log(i);
    }, i * 1000);
}

//IFFY
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            // 3 times 5
            console.log(i);
        }, i * 1000)
    })(i)
}

// Without Hoisting:
function functionName() {
    console.log("work at tech");
}

functionName();         // function is called after declaring it

// With Hoisting:
functionName();        // function is called before declaring it

function functionName() {
    console.log("work at tech");
}

// Question for hoisting
var x = 21;
var fun = function () {
    console.log(x);
    var x = 20;
};
fun();