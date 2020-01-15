// Function Constructor

        // var john = {
        //     name: 'John',
        //     yearOfBirth: 1990,
        //     job: 'teacher'
        // };
        // Function constructors are capitalized
        // var Person = function(name, yearOfBirth, job) {
        //     this.name = name;
        //     this.yearOfBirth = yearOfBirth;
        //     this.job = job;
        // }
        // 
        // Person.prototype.calculateAge = function() {
        //     console.log(2020 - this.yearOfBirth);
        // };
        // 
        // Person.prototype.lastName = 'Smith';
        // 
        // var john = new Person('John', 1990, 'teacher'); // Instantiation
        // var jane = new Person('Jane', 1969, 'designer');
        // var mark = new Person('Mark', 1948, 'retired');
        // 
        // john.calculateAge();
        // jane.calculateAge();
        // mark.calculateAge();
        // 
        // console.log(john.lastName);
        // console.log(jane.lastName);
        // console.log(mark.lastName);
        // 
        // 
        // // Has own property Object prototype method
        // 
        // john.hasOwnProperty('job'); // true
        // john.hasOwnProperty('lastName'); // false
        // john instanceof Person // true 


// Object.create
        // var personProto = {
        //     calculateAge: function() {
        //         console.log(2020 - this.yearOfBirth);
        //     }
        // };
        // 
        // var john = Object.create(personProto);
        // john.name = 'John';
        // john.yearOfBirth = 1990;
        // john.job = 'teacher';
        // 
        // var jane = Object.create(personProto, {
        //     name: { value: 'Jane' },
        //     yearOfBirth: { value: 1969 },
        //     job: { value: 'designer' }
        // });


// Primitives vs Objects

//Primitives
var a = 23;
var b = a; // Primitives store values
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1; // Objects store references
obj1.age = 30;

console.log(obj1.age); // 30
console.log(obj2.age); //30


// Functions
var age = 27;

var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
};

change(age, obj);
console.log(age);
console.log(obj.city);


