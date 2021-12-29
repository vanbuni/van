const number = [1,2,3,4,5,6,7,8,9]



// number.forEach((item, index, arr) => {
    
//     console.log('a[' + index + '] = ' + item);
//     console.log(arr);
// });

let sum = 0;
number.forEach(item => {
    sum += item;
})
console.log(sum);

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a']

 let count = {};

 letters.forEach(item => {
     if(count[item]){
         count[item]++;
     }else {
         count[item] = 1;
     }
 })
 console.log(count);