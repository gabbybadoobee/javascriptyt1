
//VARIABLES


//var is global
var z = "THIS IS GLOBAL"


//Let can be manipulated sa console log
let a = 10 //statement tawag dito
let b = 'test1'

//const is constant hindi siya mamamanipulate sa console log kasi fixed value na siya 
const c = 20
const d = 'test2'


// THIS WILL PRODUCE AN ERROR KASI OUT OF SCOPE SI X
// function testFunction(){
//   let x = 20
// }

// console.log(x);


//This will produce an output kasi nasa scope siya ng function
function myFunction(){
    let y = "This code is correct"
    console.log(y);
}


//DATA TYPES

//String
let text1 = "This is a String"
//Integer
let intNum1 = 1
//Boolean
let switchCase = true
//Float
let floatNum1 = 20.25
//Big Integer

// console.log(text1);
// console.log(intNum1);
// console.log(switchCase);
// console.log(floatNum1);


//ARITHMETIC OPERATORS

// + Addition
let add = 5
console.log( 'This is addition' , add + 5);
// - Subtraction
let subtract = 8
console.log( 'This is subtraction' ,10 - subtract);
// * Multiplication
let multiply = 10
console.log('This is multiplication' ,  multiply * 2);
// / Division
let divide = 2
console.log('This is division' , 20 / divide);

//CONCATENATE PROBABLY USE COMMA

let firstName = "Gabriel"
let lastName = "Marano"

console.log("My name is:" + firstName + " " + lastName);