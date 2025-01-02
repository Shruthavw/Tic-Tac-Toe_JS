//Arithemetic oprations
let a=5;
let b=2;
console.log(" a + b =" , a + b);
console.log(" a - b =" , a - b);
console.log(" a * b =" , a * b);
console.log(" a / b =" , a / b);
console.log(" a % b =" , a % b);
console.log(" a ** b =" , a ** b);

//comparision operators
let c=6;
let d=5;
console.log(" c == d" , c == d);
console.log(" c!= d" , c != d);
console.log(" c === d" , c === d);
console.log(" c !== d" , c !== d);
console.log(" c < d" , c < d);
console.log(" c > d" , c > d);
console.log(" c >= d" , c >= d);
console.log(" c <= d" , c <= d);

//Logical operators
let cond1 = a > b;
let cond2 = a < b;

console.log(" cond1 && cond2 " , cond1 && cond2 );
console.log("cond1 || cond2 " , cond1 || cond2);
console.log("!(a<b) " , !(a<b));
 
// // Conditional staements
 let mode = "light";
 let color;

 if(mode === "dark"){
    color = "black";
 }

 if(mode === "light"){
    color = "white";
 }
 console.log(color);

 //if else
 let age = 19;
 if(age >= 18){
    console.log("vote");

 }
 else
 console.log("can't vote");

 //else-if statements
 if(age < 18){
    console.log("minor");
 }
 else if(age > 60)
    {
        console.log("Senoior");

    }
    else
    console.log("Middle");

    // //Ternary operator
    let res = age >= 18 ? "Adult" : "not Adult";
    console.log(res);

    // //MDN docs
    // //switch statements

    //check if the num is multiple of 5

    let num = prompt("Enter a number");
    if (num % 5 === 0){
        console.log("Multiple of 5");
        }
        else{
            console.log("Not Multiple of 5");
        }

// gradeing acc to marks

let marks = prompt("enter your marks");
let grade;

if(marks >= 90 && marks <= 100){

    console.log("grade = A");}

else if(marks >= 70 && marks <= 89){
    grade = "B";
}
else if(marks >= 60 && marks <= 69){
    grade = "C";
}
else if(marks >= 50 && marks <= 59){
    grade = "D";
}
else{
    grade = "F";
}
