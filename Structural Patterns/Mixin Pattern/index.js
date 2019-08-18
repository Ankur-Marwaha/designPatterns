class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} is doing Vroom Vroom!`);
    }
}

Object.assign(Car.prototype, carMixin);

