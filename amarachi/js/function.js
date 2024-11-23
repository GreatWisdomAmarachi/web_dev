//Js function
// function functionname(){
    //statement;
    //}

 function add(){
    let w=5;
    let o=4;
    console.log(`the addition of ${w} and ${o} is ${w + o}`)
 }
add();

function sub(){
    let uche = 20;
    let ebeneza = 15;
    console.log(`the subtraction of ${uche} and ${ebeneza} is ${uche - ebeneza}`)
}
sub();

function div(){
    let chioma = 30;
    let b = 10;
    console.log (`the division of ${chioma} and ${b} is ${chioma / b}`) 
}
div();

function mult(){
    let a = 10;
    let b = 12;
    console.log(`the multiplication of ${a} and ${b} is ${a * b}`) 
}
mult();

function sum(num1, num2, num3){
    let sum=num1 + num2 + num3;
    console.log(`the summation of ${num1},${num2},and ${num3} is ${sum}`);
    
}

let a = Number(prompt("enter first number"))
let b = Number(prompt("enter second number"))
let c = Number(prompt("enter third number"))

sum(a, b, c)

div();

function divi (x,y,z){
    let j = y + z;
    console.log(`division of ${y} + ${z} is ${j / x }`);
}
divi(a,b,c)

function multi(x,y,z){
    let mul=x*y*z;
    console.log(`when you multiply ${x} * ${y} *${z} you get ${mul}`)
}
multi( a, b , c)

// function printname(myname){
//     console.log(`my name is ${myname}`)
// }

let d= Number(prompt("enter first number"))
let e = Number(prompt("enter second number"))
let f = Number(prompt("enter third number"))

sum(d, e, f)
