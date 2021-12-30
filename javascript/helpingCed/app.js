// var i = 2;
// if (i > 3) {
//   console.log("is greater than");
// };

// var cat = 3;
// var dog = 6;

// if (cat == dog) {
//   console.log("equal")
// }
// else {
//   console.log("not the same")
// };


// var person = {
//   firstName: "Bobby",
//   age: 12
// };
// if (person.age > 18) {
//   console.log(person.firstName + "  is allowed to go to the movie if they are old enough (18 or older)")
// }
// else {
//   console.log(person.firstName + " is not allowed to go to the movie if they are not older than 18. ")
// };
// if (person.firstName.startsWith("B")) {
//   console.log("Enjoy the movie this time" + person.firstName);
// }


// if (person.firstName.startsWith("B") && person.age > 18) {
//   console.log("Would you like popcorn with the movie?");
// };

// if (1 === "1") {
//   console.log("Strict")
// }
// else if (1 == "1") {
//   console.log("loose")
// }
// else {
//   console.log("Not equal at all")
// };

// if (1 <= 2 && 2 === 4) {
//   console.log("yes");
// };
// console.log(typeof "Dog");
// console.log(typeof (true));

// var s = 13;
// if (s > 12) {
//   console.log("s is greater than 12");
// }

// var boat = "fit";
// if (boat.length === 3) {
//   console.log("yay")
// };

// var player = {
//   highScore: 100,
//   age: 21,
//   system: "Playstation",
//   firstName: "Lavan",
//   state: "California"
// };

// if (player.highScore > 99 && player.age > 20) {
//   console.log(player.firstName + " is the best player in " + player.state + ", he wins a  " + player.system);
// }
// else {
//   console.log(" Sorry " + player.firstName + ", maybe next year");
// };

// var i;
// for (i = 0; i < 11; i++) {
//   console.log("hello");
// }

// function say(message) {
//   console.log(message);
// }
// var result = say("Hello");
// console.log("Result is:" + result);

// var cat = "cat";

// if (cat.length == 3) {
//   console.log('Is equal');
// }

// var dog = "dog";

// if (dog.length === cat.length) {
//   console.log('is the same')
// } else {
//   console.log('is not the same')
// };



// var person = {
//   firstName: "Booby",
//   age: 12
// };

// if (person.age > 18) {
//   console.log(person.firstName + ' is allowed ');
// } else {
//   console.log(person.firstName + ' is not allowed ');
// }

// var age = 15;
// console.log((age > 18) ? "yes" : "no");


// var person2 = {
//   name: 'van',
//   age: 31,
//   score: 1000
// };
// console.log((person2.name === 'van') ? 'welcome' : 'not van');


// var dog = 'dog'
// if(dog.typeOf = 'Boolean'){
//   console.log("TRue")
// } else{
//   console.log("False");
// }


// if (true.typeOf = 'Boolean'){
//   console.log("True")
// }
// var ttt = "Hey"
// if (ttt.typeOf = 'undefined'){
//   console.log("True");
// } else {
//   console.log("False");
// }




// function say(message) {
//   if (message.length <= 20) {
//     console.log(message + message)
//   }
//   else {
//     console.log(message.slice(0, message.length / 2));
//   }
// };
// say("abcd")
// say("abcdefghijklmnopqrstuvwxyz")


// function fibonacci(nums) {
  
//   let fib = [1,1,2,3,5,8,13,21,34,55,89,144];
//   let sum = fib.slice(0, nums);
  
//   let total = 0;
//   for(var i = 0; i < sum.length; i++){
//    total += sum[i]
//   }
//   return total
    
//   }
  






// console.log(fibonacci(6))
// console.log(fibonacci(7))
// function findMiddleIndex(str2) {
//     var middleOfString = Math.floor(str2.length / 2);
//     return middleOfString;
//   }
  
  
//   str = 'abc'
//   console.log(str.length)
  
//   function firtsHalf(str3) {
//     var HalfFirst = str3.slice(0, findMiddleIndex(str3))
//     return HalfFirst;
//   };
//   console.log(firtsHalf("Hello"));
//   console.log(firtsHalf("Hello World"));
  
  
//   function capHalf(str){
//     if(str.length % 2 === 0){
//         var half = str.toUpperCase().slice(0, findMiddleIndex(str)) + str.slice(findMiddleIndex(str))
//         console.log('working')
//         return half
//     } else if (str.length % 2 != 0){
//         var half2 = str.toLowerCase().slice(0, findMiddleIndex(str)) + str.toUpperCase().slice(findMiddleIndex(str))
//         console.log('working2')
//         return half2
//     }
      
    
    
//   }
//   console.log(capHalf("test"))
//   console.log(capHalf("test2"))
  
//   function white_space(input) {
//     var words = input.split(' ');
//     var CapitalizedWords = [];
//     words.forEach(element => {
//     CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
//     });
//     console.log( CapitalizedWords.join(' '))
//     console.log(words);
//     }
  
  
//   white_space("Hey how are you")
  
  

const test = 6

switch (test){
  case test :
    console.log('Test is greater');
    break;
  case test :
    console.log('Test is less');
}