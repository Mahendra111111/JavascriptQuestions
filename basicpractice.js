// Write a program to swap two variables.
let val1= 10;
let val2= 20;
console.log(val1,val2);
let temp=val1;
val1 = val2;
val2 = temp;
console.log(val1,val2);


// Reverse a string without using built-in methods.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const input = "Hello, World!";
const output = reverseString(input);
console.log(output); 



//Check if a number is even or odd.
function isCheck(num) {
    if(num % 2==="0"){
        console.log(num ,"is Even number");
    }
    else{
        console.log(num, "is Odd number");
    }
}
let check = isCheck(50);


//Write a program to find the factorial of a number.
function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers.";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));