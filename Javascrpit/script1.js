// document.getElementById()//#id (unique)
// document.getElementsByClassName()//htlml collection
// document.getElementsByTagName()//Paragraph

// function changeColor(newColor) {
//     const elem = document.getElementById("para");
//     elem.style.color = newColor;
//   }
//   //query selector by the classnames
//   const el = document.querySelector(".myclass");


  //Event handler
//   const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);
// document.getElementById(textBox);
// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener("keydown", (event) => {
// output.textContent = `You pressed "${event.key}".`;
// });


const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  //object literal
  //shorter syntax
  //dot notation
  //bracket notation