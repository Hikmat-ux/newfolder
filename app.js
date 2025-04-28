

const fullName = prompt("Enter ur Name and surname:");
const firstName = fullName.split("")[0];
console.log("Hi " + firstName + "!");


let age = prompt("Enter your age:");
age = Number(age);
if (age <= 18) {
    console.log("Access Denied");
} else {
    console.log("Access Granted");
}

const number = prompt("Enter a 4 digit number:");
const sum = Number(number[0]) + Number(number[1]) + Number(number[2]) + Number(number[3]);
console.log("sum = " + sum);
