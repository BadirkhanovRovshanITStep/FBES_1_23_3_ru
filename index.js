function Car(model, power) {
    this.model = model;
    this.power = power;

    this.signal = function() {
        return 'signal';
    }
}

Car.prototype.beep = function() {
    return 'beep';
}

Car.prototype.lights = 2;
Car.wheelsCount = 4;

function BMW(model, power, fultype) {
    // Car.call(this, model, power);
    // Car.apply(this, [model, power]);
    Car.bind(this, model, power)();

    this.fultype = fultype;
}

Object.setPrototypeOf(BMW, Car);
Object.setPrototypeOf(BMW.prototype, Car.prototype);

const bmw = new BMW('m5', 700, 92);

console.log(bmw);
console.log(bmw.model);
console.log(bmw.beep());
console.log(BMW.wheelsCount);
console.log(bmw.wheelsCount);