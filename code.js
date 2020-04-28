// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function isNumeric(input){
//     return !isNaN(input === "Jim Henson");
// }

function sayHello(input) {
    if (input === true || input === false) {
        return ("Hello, World!")
    } else if (input === "Pat") {
        return "Hello, Pat!";
    } else if (input === "Alex") {
        return "Hello, Alex!";
    } else {
        return "Hello, Jane!";
    }
}

function isFive(input) {
    return input === 5;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}


function isVowel(str){
    let noCase = str.toLowerCase();
    return noCase === "a" || noCase === "e" || noCase === "i" || noCase === "o" || noCase === "u";
}


console.log(isVowel("4"));






function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}

console.log(add("banana", "split"));
console.log(add());
