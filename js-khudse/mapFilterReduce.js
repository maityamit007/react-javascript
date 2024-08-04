let arr = [1, 2, 3, 5];

//Would only work using a function() but wont work using () => functions instead!
Array.prototype.myArray = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}


console.log(arr.map((ele) => ele + 1));
console.log(arr.myArray((ele) => ele + 1));


Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp;
}

console.log(arr.filter((ele) => ele == 2));
console.log(arr.myFilter((ele) => ele == 2));

Array.prototype.myReduce = function (cb, intialValue) {
    let isUndef = false;
    if (['', undefined, null].includes(intialValue)) {
        isUndef = true;
        intialValue = this[0];
    }
    for (let i = isUndef ? 1 : 0; i < this.length; i++) {
        intialValue = cb(intialValue, this[i]);
    }
    return intialValue;
}

console.log(arr.reduce((acc, ele) => acc + ele + 2, 19));
console.log(arr.myReduce((acc, ele) => acc + ele + 2, 19));
