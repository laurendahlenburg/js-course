///////////////////////////////////////
// Lecture: Hoisting

// calcAge(1990); --- hoisting will work for function declarations

function calcAge(year) {
    console.log(2016 - year);
}

calcAge(1990);

// retirement(1990); -- hoisting will not work for function expressions

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);



// variables

console.log(age); // undefined
var age = 23;
console.log(age); // this works

function foo() {
    // console.log(age); --- undefined
    var age = 65;
    console.log(age); // 65: function scope
}
foo();
console.log(age); //global scope: 23






///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
// 
// function calcAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        // function inner() {
        //     console.log(this);
        // }
        // inner();
    }
}
john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

// Borrow method
mike.calcAge = john.calcAge;
mike.calcAge();
