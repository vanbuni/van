const people = [
    {name: "van", age: 26},
    {name: "carina", age: 42},
    {name: "tevin", age: 31},
    {name: "zerrick", age: 42}
]


let result = people.reduce((groupedPeople, person) => {
const age = person.age
console.log(`${groupedPeople[age]} AGE: ${age} ${person}`)
if(groupedPeople[age] == null) groupedPeople[age] = []
groupedPeople[age].push(person)
return groupedPeople
}, {})

console.log(result);