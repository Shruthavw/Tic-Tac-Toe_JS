//for loop

for(let i = 1; i <= 6; i++){
    console.log("Hello JS!");
}

//calculate sum of 1 to 10
let sum = 0;
let num = prompt("enter a num");
for(let i = 0;i <= num;i++){
    sum += i;
}
console.log("Sum =", sum );

//Infinite loop
//While loop
let i = 1;
while(i <= 10){
    console.log("Hello js!");
    i++;
}

//do while
let j =1;
do {
    console.log("i =",i)
    j++;
}
while(j <= 10);

//for-of loop(iterator -> character)
let str = "Javascript";

let size = 0;
for(let i of str){
    console.log("i =",i);
    size++;
}
console.log("Size =",size);//10

//for-in loop
let student = {
    name : "Rahul",
    age : 20,
    cgpa : 8.2,
    ispass : true,

};
for(let key in student){
    console.log("key=",key, "value =",student[key]);
 }


 //Print all the evn nums from 0 to 100
 for(let num = 0;num <= 100;num++){
    if(num % 2 === 0)
    console.log("Number =",num);

//  }

// Game number (ask the user guess the num)
let gamenum = 25;

let guessnum = prompt("Guess the number");

while(  guessnum != gamenum){
    guessnum = prompt("You entered the wrong num. Guess again : ");

}
console.log("Congratulations, you have enterred the right num");
