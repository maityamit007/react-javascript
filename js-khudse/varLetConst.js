
// Illegal shadowing in case we declare using let and same thing is re-declared using var.
function sayName () {
    // let a = 10;
    var b = 'amit';
    if(true){
        // var a = 20;
        let b = "billa";
        var all= 10;
        // console.log(a);
        console.log(b);
    }
}

sayName();
console.log('all', all);

// Can re-declare using var and let but cannot using const.

let c;
// let c;

// Inside scope we can do without any issues.
let d;
if(true){
    let d;
}

