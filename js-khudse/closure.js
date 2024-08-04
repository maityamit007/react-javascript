let count = 0;
(function printCount(){
    if(count === 0){
        let count = 1;
        console.log(count); //1
    }
    console.log(count);// 0
})();

function createBase(num){
    return function (innerNum) {
        console.log(innerNum + num);
    };
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// Question 6 : Time Optimization

function find() {
    let a = [];
    for (let i =0;i<1000000;i++){
        a[i]= i*i;
    }
    return function (index) {
        console.log(a[index]);    
    }
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");


// Question 7 : How would you use a closure to create a private counter?

function counter() {
    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrive() {
        return "Counter = " + _counter;
    }
    
    return {
        add,
        retrive
    };
}
const c = counter();
c.add(5)
c.add(10)
console.log(c.retrive());

// Question 8 : Module Pattern : 
var module = (function (){
    function privateMethod(){
        console.log("private");
    }
    return {
    publicMethod : function(){
        console.log("public");
    }
};
    
})();
module.publicMethod();
// module.privateMethod();// Cannot access this method because its a private method


let view;
function Like() {
    let called = 0;

    return function(){
        if (called > 0){
            console.log("Already")
        }else{
            view= "Roadsidecoder";
            console.log("Subscribe", view);
            called++
        }
    };
}
let isSub = Like();
isSub();
isSub();
isSub();
isSub();

// Question 10 : once Polyfill 
// Please pracitce
function once(func,context) {
    let ran;

    return function(){
        if(func){
            ran = func.apply(context || this, arguments);
            func = null
        }
        return ran;
    };
}
 const hello = once((a,b)=>{
    console.log("Hi",a,b)
})
 hello(1,2);
 hello(1,2);
 hello(1,2);
 hello(1,2);


// Question 11 : Memoize Polyfill  
// Please pracitce
function myMemoize(fn,context) {
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){ 
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];    
    };
}

const clumsyProduct = (num1,num2) => {
    for (let i = 1; i <= 100000000; i++) {
        return num1 * num2;    
    }
}

const MemoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(MemoizeClumsyProduct(9467,7649));
console.timeEnd("First call")

console.time("Second call");
console.log(MemoizeClumsyProduct(9467,7649));
console.timeEnd("Second call");

function counting (){
    let count = 0;

    return function(){
        return ++count;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    let container = document.getElementById("conatiner");
    let buttonDoc = document.getElementById("addButton");
    let currentCount = counting();
    buttonDoc.addEventListener('click', (event)=>{
        let count = currentCount();
        if (count < 5){
            let msg = document.createElement('input');
            container.appendChild(msg);
        }
    })
})

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween (...args) {
    return function (context){
        if(args.length != 2){
            throw Error('Please keep two arguments atleast!');
        }
        if(args[0] <= context && context <= args[1]){
            return true;
        }else{
            return false;
        }
    }
} 

arr.filter((ele) => (ele >= 3 && ele <= 6))
console.log(arr.filter(inBetween(3, 6)));

function inArray(...args) {
    return function (context) {
        if (!Array.isArray(args[0])) {
            throw Error('Please provide an array!');
        }
        return args[0].includes(context);
    }
}
// console.log(arr.filter((ele) => ([1, 2, 10].includes(ele))))
console.log(arr.filter(inArray([1, 2, 10])));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
    { name: "Christain", age: 17, surname: "Bale" }
];

function byField(fieldName){
    return function (context1, context2){
        return context1[fieldName] > context2[fieldName] ? 1 : -1;
    }
}

Array.prototype.customSort = function (fieldName, functionType) {
    switch (functionType) {
        case 'byField':
            return this.sort(byField(fieldName));
        default:
            return this.sort(byField(fieldName));
    }
}

console.log(users.customSort('age', 'byField'));
// function makeArmy() {
//     let shooters = [];
//     let shooter = function () {
//         let i = 0;
//         while (i < 10) {
//             alert(i);
//             i++;
//         };
//     }
//     shooters.push(shooter);
//     return shooters;
// }

// let army = makeArmy();
// console.log(army);
// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.