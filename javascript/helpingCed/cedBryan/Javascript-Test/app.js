const a = {x:1}
const b = {x:1}
console.log(a===b)

lion = 1
++lion
console.log(lion);


class Car{
    static numberOfCars = 0;
    static beginRace(){
        console.log('The race has begun!');
    }
    constructor(model){
        this.model = model
        Car.numberOfCars += 1
    }
}
let car1 = new Car("Mustang");
let car2 = new Car("Bug");
let car3 = new Car("Toyota");
console.log(Car.numberOfCars);
Car.beginRace()




