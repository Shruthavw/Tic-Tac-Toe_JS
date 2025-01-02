let marks = [97,87,88,92,67,78];
console.log(marks);
//typeof marks  (object)
//Average of marks
let avg, sum=0;
for(let i=0; i<marks.length; i++){
    sum = sum + marks[i];

}
avg = sum / marks.length;
console.log(avg);

//push() (adds at the end)
//pop() (delete from end and return)
//toString (array to string)
//Concat (joins multiple arrays and retruns result)
//shift() deletes an element at the beginning
//unshift() (adds the ele at the beginning)
//slice (substring)
//splice (changes the original array(add,remove,replace))

let arr= [1,2,3,4,5,6,7];
//splice(startidx, delcount, newele);
arr.splice(2,2,101,102);
console.log(arr);//1,2,101,102,5,6,7
//Add element
arr.splice(2,0,101);
console.log(arr);//1,2,101,101,102,5,6,7

//delete element
arr.splice(0,2);
console.log(arr);//101,101,102,5,6,7

//replace an element
arr.splice(3,1,104);
console.log(arr);

