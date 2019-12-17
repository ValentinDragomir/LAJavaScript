var car = {
    make: "Audi",
    model: "A4",
    year: 2020,
    color: "black",
    passengers: 5,
    mileage: 50,
    engineIsOn: false,
    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,
    refill: function (num) {
        if(this.fuel + num > this.MaxFuel) {
            this.fuel = this.maxFuel;
            console.log("Too much!");
        } else {
            this.fuel += num;
        }
    },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("Too far away!");
            distance = this.distanceToEmpty();
        }
        consumption = Math.round(distance * this.mediumConsumption / 100);
        this.fuel -= consumption;
        this.mileage += distance;
    },
    distanceToEmpty: function() {
        return Math.round(this.fuel / this.mediumConsumption * 100);
    },
    stop: function() {
        if(this.engineIsOn) {
            this.engineIsOn = false;
            console.log("Car stopped");
        } else {
            console.log("Car is already stopped");
        }
    },
    start: function() {
        if(!this.engineIsOn) {
            this.engineIsOn = true;
            console.log("Car started");
        } else {
            console.log("Car is already started");
        }
    },
}

car.mileage = 100;
console.log(car.year);
console.log(car.mileage);
// console.log(car["mileage"]); // alternativ
car.start();
// car.start();
// car.stop();
// car.stop();

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);

// for(prop in car) {
//     console.log(prop + " = " + car[prop]);
// }