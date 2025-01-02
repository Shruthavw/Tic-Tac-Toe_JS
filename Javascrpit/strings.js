// let str1 = "Hello Js";
// console.log(str1[7]);//s

// //Template Literals (string interpolation ${expression})
// let sentence = `this is template literal`;
// console.log(typeof sentence);

// let obj = {
//     item : "pen",
//     price : 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);  //num converted to string
// console.log("the cost of", obj.item, "is", obj.price, "ruppes"); //num is highlighted in the output

// let string = `This is a template literal ${1+2+3}`;
// console.log(string);

// //Escape characters(length will be counted as 1)
// // \n,\r,\b etc
//String functions

// str = "     Javascript Js    ";
// newstr = str.toUpperCase();
// console.log(newstr);
// newstr2 = str.toLowerCase();
// newstr3 = str.trim();
// console.log(newstr2);
// console.log(newstr3);

// //str.slice(start,end?); extracting a substring from the string
// str1 = "helolo";
// res = str1.slice(2,7);//returns a part of string (34567)
// console.log(res);
// //str.concat
// str2 = "abcdef";
// rs1 = str1.concat(str2);//str1 + str2
// console.log(rs1);
// //str.replace
// console.log(str1.replace("1","0"));
// //str.replceAll
// console.log(str1.replace("lo","p"));//replaces one time
// console.log(str1.replaceAll("lo","p"));//replaces everytime

// //str.charAt(inx);
// console.log(str1.charAt(3));

//create a username as @+fullname+fullnamelength
// let fullname = prompt("Enter your full name");
// console.log(fullname);
// let username = "@"+ fullname + fullname.length;
// console.log(username);

//testing if a sttring contains substring

const browsetype = "Mozilla";
if(browsetype.startsWith("zilla"))
    {
        console.log("found zilla");
    }
else
{
console.log("not found zilla");
}
const browsetype1 = "Mozilla";
if(browsetype1.endsWith("zilla"))
    {
        console.log("found zilla");
    }
else
{
console.log("not found zilla");
}

