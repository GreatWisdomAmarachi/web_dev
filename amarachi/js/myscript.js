console.log('Hello world!');
document.getElementById("demo").innerHTML="welcome to javascript class";
document.getElementById("demo").style.backgroundColor ="red";
document.getElementById("demo").style.color ="white";
document.getElementById("demo").style.display ="none";
let first_name="great"
let last_name="prince"
console.log(first_name)
console.log(last_name)
let phone_number="09078776323"
let date_of_birth="9/08/2029"
console.log(phone_number)
console.log(date_of_birth)
let user_name="amarachi"
let address="10 unchi street"
console.log(user_name)
console.log(address)
let password="father1567"
let emall_address="amarachibaby@gmail.com"
console.log(password)
console.log(emall_address)
console.log(" my first name is " + first_name + " and my last name is "+ last_name +" and my phone number is "+ phone_number);

console.log(" my user_name is " + user_name+" and my address is "+ address + " and my password is " + password + " and my emall is " + emall_address);
let num1=5;
let num2=5;
let sum = num1 +num2;
let mult = num1*num2;
let div = num1 /num2;
let sub = num2-num1;
let mod = num2 % num1;
let expo = num1 **2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`The multiplication of ${num1} and ${num2} is ${mult}`);
console.log(`The division of ${num1} and ${num2} is ${div}`);
console.log(`The subtraction of ${num1} and ${num2} is ${sub}`);
console.log(`The modulus of ${num1} and ${num2} is ${mod}`);
console.log(`${num1} raise to the power of 2 is ${expo}`)

console.log(num1 < num2)
console.log(num1 > num2 )
console.log(num1 <= num2 )
console.log(num1 >= num2 )

console.log(!(2>1) && (3<2));
console.log(!(3<=5) || (1>=0));
console.log(!(1===1) && (10<=-10));
console.log((20>=10) || (5===8));
console.log((30!=10) && !(6<=10));
console.log((5===5) || (8>=10));

if (num1 > num2) {
    console.log("first number is greater than the second number");
}else if(num1 == num2){
    console.log("The first number is equals to the second number");
}else if(num1 < num2){
    console.log("The first number is less than the second number");
}
else{
    console.log("invalid number");
}
let age = 30;
if (age > 0 && age <= 11){
    console.log("Children are not allowed in this club");
}else if(age >= 12 && age <= 18){
    console.log("Welcome to the teenage club")
}else if(age > 18 && age < 25){
    console.log("welcome to the youth club")
}else if(age >= 25){
    console.log("Welcome to the VIP section");
}else{
    console.log("age is not valid")
}
// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")
// console.log(`your full name is ${firstName} ${lastName}`);
// let assignmentscore = Number(prompt("Enter your assignment score"));
// let quizscore = Number(prompt("Enter your quiz score"));
// let examscore =Number(prompt("Enter your  exam score"));

// let totalscore = assignmentscore + quizscore + examscore;

// if (totalscore >= 70 && totalscore <= 100){
//     console.log("You scored A");
// }else if(totalscore >= 60 && totalscore<= 69){
//     console.log("You scored B");
// }else if (totalscore >= 50 && totalscore <= 59 ){
//     console.log("you scored c");
// }else if(totalscore <= 45 && totalscore <=49){
//     console.log("you scored D");
// }else if(totalscore <= 0 && totalscore >= 44){
//     console.log("you scored F")
// }else{
//     console.log("Invalid input");
// }

switch(true){
    case totalscore <= 70 && totalscore <=100:
        console.log("you score A");
        break;
    case totalscore <= 60 && totalscore <=69:
        console.log("you scored B");
        break;
    case totalscore<= 50 && totalscore<=59:
        console.log("you scored c");
        break;
    case totalscore <= 45 && totalscore <= 49:
        console.log("you scored D");
        break;
    case totalscore <= 0 && totalscore<=44:
        console.log("you scored f");
        break;
    default:
        console.log("invalid input");                  
}
// I=PRT/100
//R=I*100/RT
//R=I*100/PT

const pie = 3.141;
let radius = Number(prompt("enter the radius"));
let pi = 3.14


let area = pi * (radius *radius)
console.log(`the area of the circle  is ${area}`)
