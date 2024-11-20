// from 2024.11.9 and 2024.11.11

console.log("HelloWorld");

let a = 5;
let b = 6;

function sum(a,b){
    return a+b;
}

console.log(sum(a,b));

let arr = ['red','green','gray','black','white'];

for(let i=0;i<=4;i++){
    console.log(arr[i]);
}
//make a random number
const random = Math.floor(Math.random()*100)+1;
//prepare the readline function
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('1122');

function guessNum(){
    rl.question('Guess a number:',(input)=>{
        const guess= parseInt(input);

        if(guess==random){

            rl.close();
        }
        else if(guess<random){
            console.log('Bigger!');
            guessNum();
        }
        else {
            console.log('Smaller');
            guessNum();
        }
    });
}

guessNum();