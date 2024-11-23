// let num1=Number(prompt(`Enter the first number`))
// let num2=Number(prompt(`Enter the second number`))
// let num3=Number(prompt(`Enter the third number`))

// let lagestNumber =num1

// if (num2 > lagestNumber){
//     lagestNumber=num2
// }
// if (num3 > lagestNumber){
//     lagestNumber=num3
// }

// console.log(`the largest number is ${lagestNumber}`);

while (condition){
statement
}

let i = 1
while(i  < 10){
    console.log(i);
i++;
}
let even = 1
while(even <= 100) {
    if (even % 3 == 0 && even % 5 == 0){
        console.log('FIZBUZZ');
    }else if (even % 3 == 0){
        console.log('FIZ');
    }else if (even % 5 == 0){
        console.log('BUZZ');
    }else{
        console.log(even);
    }
    even++
}

// for(initialization; condition; increment/decrement){
// statement
//}
// for(let i =2; i<= 100; i++){
//     console.log(i)
// }
for(let even=0; even<=100; even++){  
    console.log(even)
}
even++


const width=5;
const height=10;
const area=width+height
// const area=calculate area width,he
console.log(`the area of the rectangle is ${area}`);