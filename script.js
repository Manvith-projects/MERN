// const a = 10

// const b = 20

// const c = 20

// if (a > b > c) {
//     console.log("a is greater than b and c");
// } else if (b > a) {
//     console.log("b is greater than c and a");
// } else if (a == b == c) {
//     console.log("a and b and c are equal");
// } else {
//     console.log("c is greater than a and b");
// }

// a == b && b == c ? console.log("a and b and c are equal") :
//     a == b ? console.log("a and b are equal") :
//         a > b && a > c ? console.log("A is greater") :
//             b > c ? console.log("B is greater") :
//                 console.log("C is greater");

// a > b && a > c ? console.log("A is greater") : b > c ? console.log(" B is greater") : a == b && b == c ? console.log("a and b and c are equal") : console.log("c is greater")

// const marks = 90
// if (marks >= 90) {
//     console.log("grade A+");
// } else if (marks >= 80) {
//     console.log("grade:A");
// } else if (marks >= 70) {
//     console.log("grade:B");
// } else if (marks >= 60) {
//     console.log("grade:C");
// } else if (marks >= 50) {
//     console.log("grade:D");
// } else if (marks >= 40) {
//     console.log("grade:E");
// } else {
//     console.log("grade:f")
// }

// const age = 21

// if (age >= 18) {
//     console.log("major")
// } else {
//     console.log("minor")
// }
// age >= 18 ? console.log("MAJOR") : console.log("MINOR");

// const month = 7
// switch (month) {
//     case 1:
//         console.log("jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("mar")
//         break;
//     case 4:
//         console.log("apr")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     case 6:
//         console.log("jun")
//         break;
//     case 7:
//         console.log("jul")
//         break;
//     case 8:
//         console.log("aug")
//         break;
//     case 9:
//         console.log("sep")
//         break;
//     case 10:
//         console.log("oct")
//         break;
//     case 11:
//         console.log("nov")
//         break; case 12:
//         console.log("dec")
//         break;
//     default:
//         console.log("one year for 12 months")
//         break;
// }
//         const num = 5;
//         for (let i = 0; i < 10; i++){
//             if (i%2==0){
//                 console.log(i);
//             }
//         }

//         const ab = 1000;
//         const bc = 2034;

//          const sum = ab + bc;

//          console.log(`the sum of ${ab} and ${bc} is ${sum}`);

//          const person1 = {
//             name : "harsha",
//             age : 21,
//             hobbies: ["playing cricket","reading books"],
//             address : {
//             street:"123 main srt",
//             city:"new york",
//             country:"india",
//             },
//          };
//          console.log(person1.hobbies)

// const NFTStore = {
//     artPieces: [
//       {
//         pieceName: "Emo Flamingos",
//         price: 30,
//         ownerList: [
//           {
//             name: "Fida Ernest",
//             userID: 23849,
//             purchaseDate: "09/13/2021",
//           },
//           {
//             name: "Eric Karger",
//             userID: 23510,
//             purchaseDate: "09/13/2021",
//           },
//         ],
//       },
//       {
//         pieceName: "Where is my bit wallet",
//         price: 100,
//         ownerList: [],
//       },
//     ],
//     storeCredits: 1000,
//   };
// console.log(NFTStore.artPieces[0].ownerList[0].purchaseDate);

// const person = {
//     name: "harsha",
//     age: " 21 ",
//     isstudent: false,
//     hobbies: ["reading","gaming"],
//     address: {
//         street: "123 main st",
//         city:"new york",
//         country:"USA",
//     },
// };
// const { name,...rest} = person;
// console.log(rest);

// const myName="manvith"

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// const sub = function(){
//    return "sub function";
// }
// sub();

// console.log("hello")
// let a=10,b= 10;
// if(a===b)
//     console.log("a and b are equal")
// else
//     console.log("a and b are not equal");

// function calc() {
//     function sum() {
//         let a = 10, b = 20;
//         return a + b;
//     }
//     return sum();
// }

// console.log(calc());

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//       resolve("Promise resolved successfully");
//     } else {
//       reject("Promise rejected due to error");
//     }
//   });
// }

// myPromise().then((result)=>{
// console.log(`this is from then: ${result}`);
// }).catch((error) => {
// console.log(`this is from catch: ${error}`);
// })



// async function Sample() {
//     console.log("hi")    
//  await setTimeout(()=>{console.log("hi")}, 5000)
// console.log("hello")
// }