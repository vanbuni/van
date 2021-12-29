const items = [
    {name: 'Rice', price: 5},
    {name: 'Book', price: 20},
    {name: 'Chicken', price: 10},
    {name: 'Monitor', price: 100}
];

// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price
// })

// console.log(totalPrice)


const totalPrice = items.reduce((total, item) => {
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price}`)
    return total += item.price        // Whatever we return will be our total for the next iteration
}, 0) // 0 is the default value that will be passed to total the very first time we go through our loop total = accumulator


console.log(totalPrice);

people = [
    {name: 'Kyle', age: 26},
    {name: 'John', age: 31},
    {name: 'Sally', age: 42},
    {name: 'Jill', age: 42}
]

const result = people.reduce((groupePeople, person) => {
const age = person.age
if(groupePeople[age] == null) groupePeople[age] = []
groupePeople[age].push(person)
return groupePeople
}, {})

console.log(result);


const numbers = [12,2,5]

const sum = numbers.reduce((total, number, index, array) => {
    console.log(`Total: ${total}`);
    console.log(`Number: ${number}`);
    console.log(array);
    console.log(index);
    return total + number
}, 0)

console.log(sum);