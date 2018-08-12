

class Car {
    constructor(){
        this.wheels = 4
        this.type = 'Xuv'

    }
    whateverFunction(){
        console.log('hey')
    }
}

class Ford extends Car {
    constructor(props){
        super();
    }
}

const car = new Car();
const ford = new Ford();

car.whateverFunction()

console.log(ford.wheels)