// function name(параметры) {
//     ...тело...
// }


// function showMessage(){   
//     console.log("Hello World!");
// }

// showMessage();
// showMessage();

// function showMessage(from, text){
//     console.log(from + " " + text);
// }

// showMessage("John", "Hello");
// showMessage("Lily", "how are you?");

// function sum(a, b){
//     console.log(a + b);
// }

// let num1 = Number(prompt("Enter the number"));
// let num2 = Number(prompt("Enter the number"));
// sum(num1, num2);


// function sum(a, b){
//     return a + b;
// }

// let num1 = Number(prompt("Enter the number"));
// let num2 = Number(prompt("Enter the number"));

// console.log(sum(num1, num2));

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         false;
//     }
// }

// let userage = Number(prompt("Yers"));

// console.log(checkAge(userage));

// if(checkAge(userage)){
//     console.log("Enter");
// }
// else{
//     console.log("Error");
// }


// function checkNumber(number) {
//     if(number % 2 == 0){
//         return "Yes";
//     }
//     else{
//         return "No";
//     }   
// }
// let number = Number(prompt("Enter the number"));
// console.log(checkNumber(number));


function min(a, b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


