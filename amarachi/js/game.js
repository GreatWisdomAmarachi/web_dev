
function game(number){
    const num = Math.floor(Math.random() *10)
    if(number === num){
        console.log(`you win.\n the correct answer is:${num} `);
        
    }else{
        console.log(`sorry try again!:correct answer is ${num}`);
        
    }
}
let inputNum = Number(prompt("guess a number:"))
game(inputNum)