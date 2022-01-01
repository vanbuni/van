
//Filter method

function fiveAndGreaterOnly(arr)
{
 var result = arr.filter(num => num > 5)
 return result   
} 

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));  // Output: [6, 8]


function evensOnly(arr)
{
    
 var result = arr.filter(num => num % 2 == 0)
 return result

} 

console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]



function ofAge(arr){
    var result = arr.filter(el => el.age > 17)
    return result
}

console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]))
//Output: 
//[ { name: "Angelina Jolie", age: 80 },
//    { name: "Bob Ziroll", age: 100 } ]



//Map method


function doubleNumbers(arr)
{
 var result = arr.map(el => el * 2)   
 return result
} 

console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]



function stringItUp(arr){
    var result =arr.map(el => el.toString())
    return result
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]



function capitalizeNames(arr){
    var result = arr.map(el => el[0].toUpperCase() + el.slice(1, el.length).toLowerCase())
    return result
}

console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]



function namesOnly(arr){
    var result = arr.map(el => el.names)
    return result
    
}

console.log("---  Array Map Extra Credit #1 ---");
console.log(namesOnly([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie", "Eric Jones", "Paris Hilton", "Kanye West", "Bob Ziroll" ]

function makeStrings(arr){
    var result = arr.map(function(el){
        if(el.age > 17){
            return el.names + ' Is old enough'
        }else{
            return el.names + ' Is not old enough'
        }
    })
    return result 
    
}

console.log("---  Array Map Extra Credit #2 ---");
console.log(makeStrings([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!"
// "Kanye West is under age!!"
// "Bob Ziroll can go to The Matrix" ]




//Reduce method


function total(arr)
{
var result = arr.reduce((a,b) => a + b)
return result
}

console.log("---  Array Reduce #1 ---");
console.log(total([1, 2, 3]));  // Output: 6


function stringConcat(arr) {
    var result = arr.reduce((el, e) => el.toString() + e.toString())
    return result
    };
   

console.log("---  Array Reduce #2 ---")
console.log(stringConcat([1, 2, 3]));   // Output: "123"



function totalVoters(arr){
   var result = arr.reduce((count, votes) =>{
       if(votes.voted === true){
           count +=1
       }
       return count
   },0)
   return result
}


var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary' , age: 31, voted: false},
    {name: 'Becky' , age: 43, voted: false},
    {name: 'Joey' , age: 41, voted: true},
    {name: 'Jeff' , age: 30, voted: true},
    {name: 'Zack' , age: 19, voted: false},
];

console.log("---  Array Reduce #3 ---")
console.log( totalVoters(voters) );  // Output: 7



function shoppingSpree(arr)
{
    var result = arr.reduce((count, cost) => {
        count += cost.price
        return count
    },0)
    return result
}

var wishlist = [
    { title: "Telsa Model S", price: 90000},
    { title: "4 carat diamond ring", price: 45000},
    { title: "Fancy hacky Sack", price: 5},
    { title: "Gold fidget spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000},
];

console.log("---  Array Reduce Extra Credit #1 ---");
console.log( shoppingSpree(wishlist) );  // Output: 227005



function flatten(arr) {
    var result = arr.flat()
    return result
    
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log("---  Array Reduce Extra Credit #2 ---");
console.log(flatten(arrays));  // Output: ["1", "2", "3", true, 4, 5, 6];



//Sort method



function leastToGreatest(arr) {
    var result = arr.sort((a,b) => {
        return a - b
    })
    return result
    
}

console.log("---  Array Sort #1 ---");
console.log( leastToGreatest([1, 3, 5, 2, 90, 20]) );  //Output: [1, 2, 3, 5, 20, 90]



function  greatestToLeast(arr){
    var result = arr.sort((a,b) => {
        return b - a
    })
    return result
    
}

console.log("---  Array Sort #2 ---")
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));  // Output: [90, 20, 5, 3, 2, 1]


function lengthSort(arr) {
    var result = arr.sort((a,b) => {
        return a.length - b.length
    })
    return result
    
}

console.log("---  Array Sort #3 ---")
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "wolf", "eaten", "family"]



function alphabetical(arr){
    var result = arr.sort()
    return result
    
}

console.log("---  Array Sort Extra Credt ---");
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));  // Output: ["by", "dog", "eaten", "family", "wolf"]