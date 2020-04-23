class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {}
}

class Cat extends Animal {
    speak() {
        console.log('Miau!');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Ham!');
    }
}

class Duck extends Animal {
    speak() {
        console.log('Mac!');
    }
}

let alma = new Cat('Alma');
let nola = new Dog('Nola');
let lessie = new Dog('Lessie');
let donald = new Duck('Donald');

alma.speak();
nola.speak();
lessie.speak();
donald.speak();