//knowleage round-up
//null and undefined
// undefined
var a;
console.log(a);
//null
var b = null;
console.log(b);
//== and ===
var x = 1;
var y = "1";
console.log("x==y", x == y);
console.log("x===y", x === y);
//some  methods
var numbers = [12, 56, 73, 89, 27];
function addFive(num) {
    return num + 5;
}
function checkNum(num) {
    return num >= 30;
}
function sumNum(num1, num2) {
    return num1 + num2;
}
//map()
var mapArr = numbers.map(addFive);
console.log(mapArr);
//filter()
var fillterArr = numbers.filter(checkNum)
console.log(fillterArr);
//reduce()
var reduceArr = numbers.reduce(sumNum, 0);
console.log(reduceArr);
//find()
var findArr = numbers.find(checkNum);
console.log(findArr);
//some()
var someArr = numbers.some(checkNum);
console.log(someArr);
//push() - add the end
var addLastArr = numbers.push(39);
console.log(addLastArr);
console.log(numbers);
//unsift() - add the first
var addFirstArr = numbers.unshift(45);
console.log(addFirstArr);
console.log(numbers)
//pop() - remove the end
var removeEndArr = numbers.pop();
console.log(removeEndArr);
console.log(numbers);
//splice - remove element
var removeElementArr = numbers.splice(3, 2, 35, 67);

//Playground

//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumTwoNum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else
        return num1 + num2;
}
var sum2Diff = sumTwoNum(23, 45);
var sum2Same = sumTwoNum(50, 50);
console.log(sum2Dif);
console.log(sum2Same);

/*2. Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple their absolute difference if the specified number is greater than 19.*/
function absWith19(num) {
    if (num >= 19) {
        return (num - 19) * 3;
    } else
        return 19 - num;
}
var abs1 = absWith19(4);
var abs2 = absWith19(29);
console.log(abs1);
console.log(abs2);

/* 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. 
Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.*/
//check mod3 =0
function modThree(num) {
    if (num % 3 === 0) {
        return true;
    }
    return false;
}
//string -> numbers arr
function convertArr(str) {
    return str.split('').map(arrElement => +arrElement);
}
//sumArr
function sumArr(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i) {
            sum += i;
        }
    }
    return sum;
}
// replaceAterisk
function replaceAteriskModThree(str) {
    let arr = convertArr(str);
    let sum = sumArr(arr);
    let arrResult = [];
    for (let i = 0; i < 10; i++) {
        if (modThree(sum + i)) {
            arrResult.push(str.replace('*', i));
        }
    }
    return arrResult;
}
var str1 = '1*9';
replaceAteriskModThree(str1);
var str2 = '1234567890*';
replaceAteriskModThree(str2);

/* 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. 
Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.*/
function modTwo(num) {
    if (num % 2 === 0) {
        return true;
    } else
        return false;
}
function modSix(num) {
    if (modThree(num) && modTwo(num)) {
        return true;
    } else
        return false;
}
function replaceAteriskModSix(str) {
    let arr = convertArr(str);
    let sum = sumArr(arr);
    let arrResult = [];
    for (let i = 0; i < 10; i++) {
        if (modSix(sum + i)) {
            arrResult.push(str.replace('*', i));
        }
    }
    return arrResult;
}
var str1 = '1*9';
replaceAteriskModSix(str1);
var str2 = '1234567890*';
replaceAteriskModSix(str2);
