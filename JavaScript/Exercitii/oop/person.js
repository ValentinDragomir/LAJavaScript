class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, height, course) {
        // apelam constructorul parintelui
        super(name, age, height);
        //adaugam proprietatile in plus
        this.course = course;
    }
    // suprascrierea metodelor
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I like ${this.course}`);
    }
}

var radu = new Person("Radu", 33, 170);
var andreea = new Student("Andreea", 26, 168, "JavaScript");

radu.sayHello();
andreea.sayHello();