function increaseCount(){
    let Count = document.getElementById('clickCount').innerHTML;
    if(Count < 10){
        document.getElementById('clickCount').innerHTML = parseInt(document.getElementById('clickCount').innerHTML) + 1
    }
}

function decreaseCount(){
    let count = parseInt(document.getElementById("clickCount").innerHTML);
    if(count > 0){
        document.getElementById('clickCount').innerHTML = parseInt(document.getElementById('clickCount').innerHTML) - 1  
    }
    
}


let str = "Today is sunday, and tomorrow is monday"
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerAlpha = "abcdefghijklmopqrstuvwxyz"
// console.log(str.charCodeAt(0));
// console.log(upperAlpha.charCodeAt(0))
// for(let i = 0; i < upperAlpha.length; i++){
//     console.log(upperAlpha[i] + " : " + upperAlpha.charCodeAt(i))
// }
// for (let i = 0; i < lowerAlpha.length; i++){
//     console.log(lowerAlpha[i] + " : " + lowerAlpha.charCodeAt(i))
// }
// console.log(str.slice(5, 25))
// console.log(str.substring(0, 10))
// console.log(str.substr(6, 30))

// console.log(str.toUpperCase())
// console.log(upperAlpha.toLocaleUpperCase())

// console.log(str.concat(lowerAlpha))

// console.log(str.trim())
// let padstr = "Hello, World!";
// let secondstr = "welcome"
// console.log(padstr.padEnd(20, "0"));
// console.log(padstr.padStart(20, "0"));
// console.log(padstr.concat(secondstr));

// console.log(str.repeat(10))

// console.log(str.replace(/is/g, "was"));
// console.log(str.replace(/is/g, "was"))

// console.log(str.split(" ,"))

console.log(str.indexOf("is"))
console.log(str.lastIndexOf("is"))
console.log(str.search(/is/))
console.log(str.match(/is/gi))
console.log(str.matchAll(/tomorrow/gi))
console.log(str.includes("tomorrow"))
console.log(str.startsWith("tomorrow"))


console.log(str.trim())
let padstr = "Hello, World!";
let secondstr = "welcome"
console.log(padstr.padEnd(20, "0"));
console.log(padstr.padStart(20, "0"));
console.log(padstr.concat(secondstr));
