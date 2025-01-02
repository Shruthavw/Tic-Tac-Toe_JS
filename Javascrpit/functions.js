// function myfunc(object){
//     object.make = "Toyota";
// };
//  const mycar = {
//     make: "Honda",
//     year: 1998
//  };
//  console.log(mycar.make);//Honda
//  myfunc(mycar);
//  console.log(mycar.make);//Toyota

//  //calling functions
//  //Recursive functions
//  //nested functions

//  function addSquares(a,b){
//     function square(x){
//         return x * x;
//     }
//     return square(a) + square(b);
//  }

//  console.log(addSquares(2,3));//13

//  //Arrow functions
//  const sum = (a,b)=> {
//     return a+b;
//  }

 //multiply nested fuctions
 //Name conflicts -> innermost scope-> higjhest precedence
 //Closures

 //vowels
 function countvowels(str){
    let count = 0;
    for(const char of str){
        if(char==='a'|| char==='e'|| char==='i'|| char==='o'|| char==='u'){
            count += 1;

        }
    }
    console.log(count);
 }
 //Arrow function
 const countvow = (str)=>{
    let count = 0;
    for(const char of str){
        if(char==='a'|| char==='e'|| char==='i'|| char==='o'|| char==='u'){
            count += 1;

        }
    }
    return count;
 }

 //forEach llops in arrays
 let arr = [1,2,3,4,5];
 arr.forEach(function printval(val){
    console.log(val);

 });

arr.forEach(function square(num){
    console.log(num * num);
});

//Array methods
//map method
let nums =[67,52,39];
let newarr = nums.map((val) => {
    return val;

});
console.log(newarr);

let calsquare = (num) =>{
    console.log(num*num);
};


 //filter
//reduce method
