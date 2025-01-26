let str = "Amit";

let reverseRecurrsion = (str) => {
  if (str == "") {
    return str;
  } else {
    return reverseRecurrsion(str.substr(1) + str.charAt(0));
  }
};
// console.log(reverseRecurrsion('Amit'))

function myThrottle(fn, delay) {
  let last = 0;
  return function (...args) {
    if (Date.now() - last >= delay) {
      fn(args);
      last = Date.now();
    }
  };
}

function myDebounce(fn, delay) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn(...args), delay);
  };
}

let handleHold = myThrottle(() => {
  console.log("Clicked!");
}, 5000);

let newHandleHold = myDebounce(() => {
  console.log("Clicked Again!");
}, 2000);

console.log(reverseStr(str));

function infiniteCurrying(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteCurrying(a + b);
    } else {
      return a;
    }
  };
}

console.log(infiniteCurrying(2)(3)(4)(5)(6)());

let taxCalculate = (amount) => amount - amount * 0.1;
let rebateAmount = (amount) => amount + amount * 0.05;

function compose(...fn) {
  return function (args) {
    return fn.reduceRight((acc, curFn) => curFn(acc), args);
  };
}
console.log(compose(taxCalculate, rebateAmount)(12));

function counter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

let instanceOne = counter();
console.log(instanceOne.increment());
console.log(instanceOne.decrement());


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let [latest, prev] = [arr[j + 1], arr[j]];
        arr[j] = latest;
        arr[j + 1] = prev;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));


let arr = [1, 2, 4, 62, 7, 3, 99];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return [target, mid + 1];
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 9));


let num = 122;

function palindrome (num) {
  let sum = 0;
  while(num > 0){
    sum = sum* 10 + num%10;
    num = Math.floor(num/10);
  }

  return sum;
}

console.log(palindrome(122))


function missing(arr) {
  let newArr = [];

  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(missing(122))

let newArr = [];
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flattenArray([1, 4, [6, [7, 9, [1.4]]]], 9));

  function isBalanced(str ="{[({})]}") {
    const arr = [];
    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    for (let i = 0; i < str.length; i++) {
      let currentObj = str[i];
      if (obj[currentObj]) {
        arr.push(obj[currentObj]);
      } else if ([")", "}", "]"].includes(currentObj)) {
        if (arr.pop() !== currentObj) {
          return false;
        }
      }
    }
    return arr.length == 0;
  }

  console.log(isBalanced());

  function findPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
          return [i + 1, j + 1];
        }
      }
    }
    return -1;
  }

  console.log(findPair([1, 3, 6, 7, 9, 12], 21));

  function quickSort(arr) {
    let left = [],
      right = [];
    let middle = arr[Math.floor(arr.length / 2)];
    if (arr.length <= 1) {
      return arr;
    }
    for (let i = 0; i < arr.length; i++) {
      if (middle > arr[i]) {
        left.push(arr[i]);
      } else if (middle < arr[i]) {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), middle, ...quickSort(right)];
  }

  console.log(quickSort(arr));
