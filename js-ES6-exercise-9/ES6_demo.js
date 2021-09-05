// 1. Define a variable
//  - Question: Let and Const – What's the Difference?
/*
LET: Được sử dụng trong 1 block, có thể gán lại giá trị mới cho biến.
CONST: - Sử dụng khi biết chắc chắn giá trị của biến không thay đổi và tồn tại duy nhất.
       - Không thể gán lại giá trị cho biến. Nhưng nếu khai báo 1 object/array thì vẫn có thể thay đổi giá trị của nó(thêm , sửa, xóa phần tử).
       Nhưng vẫn không thể gán lại giá trị cho nó.


*/
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6';
console.log("Exercise 1: Define a variable")
console.log("MAX-SIZE is define: ", MAX_SIZE);
console.log("Title: ", title);
console.log("=================");

// 2. String Interpolation
const user = { name: 'David' };
const card = { amount: 7, product: "Bar", unitprice: 42 };
const message = `Hello ${user.name} ,
want to buy ${card.amount} ${card.product} for
a total of ${(card.amount * card.unitprice)} bucks?;
`
console.log("Exercise 2: String Interpolation")
console.log(message);
console.log("=================");

// 3. Rest Parameter
function foo(x, y, ...a) {
  return (x + y) * a.length;
};

console.log("Exercise 3: Rest Parameter")
console.log("result = ", foo(1, 2, 'hello', true, 7));
console.log("=================");

// 4. Default Parameter Values
function sum(x, y = 7, z = 42) {
  return x + y + z;
};

console.log("Exercise 4: Default Parameter Values")
console.log("sumDèault = ", sum(2));
console.log("sum = ", sum(2, 10, 30));
console.log("=================");

// 5. Arrow Functions
const evens = [1, 2, 3, 4, 5, 6];
let odds = evens.map(v => v + 1);
let pairs = evens.map(v => {
  return {
    even: v,
    odd: v + 1
  };
});
let nums = evens.map((v, i) => v + i);
let fives = [];
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log("Exercise 5: Arrow Functions")
console.log("odds: ", odds);
console.log("pairs: ", pairs);
console.log("nums: ", nums);
console.log("fives = ", fives);
console.log("=================");

// 6. Classes
// var Shape = function(id, x, y) {
//     this.id = id;
//     this.move(x, y);
//   };
//   Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
//   };

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 7. Modules

  //  lib/utils.js
class Utils {
  x;
  y;
  pi;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.pi = 3.141593;
  };
  sum = (x,y) => x + y;
}
// export default Utils;

//  someApp.js
// import {Utils} form lib/utils.js 
let math = new Utils();
console.log('2π = ' + math.sum(math.pi,math.pi));

//  otherApp.js
// import {Utils} form lib/utils.js 
let util = new Utils;
let sumDemo = util.sum;
const pi = util.pi;
console.log('2π = ' + sumDemo(pi, pi));

// 8. Promise
function showMessAfterTimeout (msg, who, timeout, onDone) {
  setTimeout(function () {
      onDone(msg + ' Hi ' + who + '!');
  }, timeout);
}
showMessAfterTimeout("", "Foo", 100, function (msg) {
  showMessAfterTimeout(msg, "Bar", 200, function (msg) {
       console.log('Finish after 300ms:' + msg);
  });
});

// 9. Loops
//   - Give an example for each method: 
//     + for…of
let arrName = ['ngan','ha','hai','tram','kim','phuong'];
for( let item of arrName ){
  console.log(item);
}

let arrStudent = [
  {name: 'ngan', age: 18},
  {name: 'ha', age: 20},
  {name: 'hai', age: 19},
  {name: 'tram', age: 18},
  {name: 'kim', age: 20},
  {name: 'phuong', age: 21}
]
for (let item of arrStudent) {
  if(item.age === 20) {
    console.log(item);
  }
}
//     + findIndex()
console.log(arrStudent);
let index21 = arrStudent.findIndex( st => st.age > 20);
console.log("student have 21 ages at index " + index21);
arrStudent.splice(index21,1);
console.log("deleted student 21 ages");



