
// **************** if/else statements

// BMI = mass / (height * height)

// var firstName = 'John';
// var civilStatus = 'single';
// 
// var isMarried = true;
// 
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is not married.');
// }


// ************* if/else if / else statements

// var firstName = 'John';
// var age = 20;
// 
// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){
//     console.log( firstName + ' is a teenager');
// } else if (age >= 20 && age < 30){
//     console.log( firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man.');
// }


// ****************** Ternary Operator and Switch statements

// var firstName = 'John';
// var age = 14;
// 
// // *** Ternary Operator
// // ? = if
// // : = else 
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
// 
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// Above statement written out
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// *** Switch Statement
// var job = 'instructor';
// 
// switch (job) {
//     case 'teacher':
//     case 'instructor': //Second case instance
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//     default:
//         console.log(firstName + ' is unemployed.');
// }

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){
//     console.log( firstName + ' is a teenager');
// } else if (age >= 20 && age < 30){
//     console.log( firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man.');
// }

// Same code using switch
// age = 10;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >=13 && age < 30:
//         console.log( firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log( firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

// Truthy and Falsy

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values (everything else)

// Example

// var height = 23; // height is falsy bc it's not defined
// 
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }


// Equality Operators

// if (height === '23') {
//     console.log('The == operator does type coercion!');
// } else {
//     console.log('The === operator does not do type coercion.');
// }


// CODE CHALLENGE #2

//Define player scores
// var johnTotal, johnAvg;
// johnTotal = 89 + 120 + 103;
// johnAvg = johnTotal / 3;
// 
// var mikeTotal, mikeAvg;
// mikeTotal = 116 + 94 + 123;
// mikeAvg = mikeTotal / 3;
// 
// var maryTotal, maryAvg;
// maryTotal = 97 + 134 + 105;
// maryAvg = maryTotal / 3;
// 
// console.log(johnAvg, mikeAvg, maryAvg);
// 
// if (johnAvg > mikeAvg && johnAvg > maryAvg) {
//     console.log('John had the higher average!');
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
//     console.log('Mike\'s team had the higher average!');
// } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
//     console.log('Mary\'s team had the higher average!');
// } else {
//     console.log('They had the same average');
// }

// Function
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }
// 
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
// 
// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
// 
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
//     //console.log(firstName + ' retires in ' + retirement + ' years.');
// }
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

// Function Statements & Expressions

// Declaration 
// function whatDoYouDo(job, firstName) {}

// Expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives an Uber in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else.'
//     }
// }
// 
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));


// Arrays 

// Initialize new array
// var names = ['John', 'Mark', 'Jane']; // Preferred method
// var years = new Array(1990, 1969, 1948); //Less common method
// 
// console.log(names[1]);
// console.log(names.length);
// 
// // Mutate Array data
// names[1] = 'Ben'; //Update array value
// // names[5] = 'Mary';
// names[names.length] = 'Mary'; // append to array
// names[5] = 'Mary';
// 
// console.log(names);

// Different data types

// var john = ['John', 'Smith', 'designer', 1990, 'teacher', false,];
// 
// john.push('blue'); //add element to end of array
// john.unshift('Mr.') // add to beginning
// console.log(john);
// 
// john.pop(); // Remove ending array item
// console.log(john);
// 
// john.pop();
// console.log(john);
// 
// john.shift(); // Remove item at beginning of array
// console.log(john);
// 
// var whereJohn = john.indexOf(1998); // locate position of array item 
// console.log(whereJohn);
// 
// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer!';
// 
// console.log(isDesigner);

// CODING CHALLENEGE 2

// var bills = [124, 48, 268];
// var dinnerOne = bills[0];
// var dinnerTwo = bills[1];
// var dinnerThree = bills[2];
// 
// function tipCalculator(price) {
//     var tip;
//     if (price < 50) {
//         tip = price * (20/100);
//     } else if (price > 50 && price < 200) {
//         tip = price * (15/100);
//     } else {
//         tip = price * (10/100);
//     };
//     return tip;
// }
// 
// var tips = [
//     tipCalculator(dinnerOne),
//     tipCalculator(dinnerTwo),
//     tipCalculator(dinnerThree)
// ];
// 
// var finalBills = [
//     dinnerOne + tips[0],
//     dinnerTwo + tips[1],
//     dinnerThree + tips[2],
// ]
// console.log(tips, finalBills);


// ************* Objects and Properties ********* //

// Object literal
// var john = {
//     // key = value
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// 
// // Call object values
// console.log(john.firstName);
// console.log(john['lastName']);
// 
// // Assign variable to key value
// var x = 'birthYear';
// console.log(john[x]);
// 
// // Mutate object data
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
// 
// // "New object" syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';
// 
// console.log(jane);


// ************* Objects and Methods *************** //
// var john = {
//     // key = value
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: 
//         function() {
//             // 'this' represents john
//             // this.age creates new object key (age)
//             this.age = 2019 - this.birthYear;
//         }
// };
// 
// // var age = john.calcAge();
// // john.age = john.calcAge();
// john.calcAge();
// console.log(john);


// Coding Challenge 4

// var john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// 
// var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// 
// if (john.calcBMI() > mark.calcBMI() ) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }

// ******************* Loops and iteration ************ //

// For loop
// i = 0, 0 < 10, log i to console, i++
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// 
// var john = [
//     'John', 'Smith', 1990, 'designer', false
// ];
// 
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }
// 
// // While loop -- example does same as above in for loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements 
// var john = [
//     'John', 'Smith', 1990, 'designer', false
// ];
// // 
// // // skips over value (continues the loop)
// // for (var i = 0; i < john.length; i++) {
// //     if (typeof john[i] !== 'string') continue;
// //     console.log(john[i]);
// // }
// // // ends (breaks) the loop
// // for (var i = 0; i < john.length; i++) {
// //     if (typeof john[i] !== 'string') break;
// //     console.log(john[i]);
// // }
// 
// // Looping backwards
// for (var i = john.length - 1; i >= 0; i-- ) {
//     console.log(john[i]);
// }

/////////// ********** CODING CHALLENGE 5 *************** ////

// Solution for John
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            
            // add results to corresponding arrays
            this.tips[i] = bill * percentage
            this.finalValues[i] = bill + bill + percentage;
        }
    }
}

john.calcTip();
console.log(john);

// Solution for Mark
// Solution for John
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            
            // add results to corresponding arrays
            this.tips[i] = bill * percentage
            this.finalValues[i] = bill + bill + percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
        // 0 = 0 + 2 = 2;
        // 2 = 2 + 6 = 8;
        // 8 = 8 + 4 = 12;
        // sum = 12;
    }
    return sum / tips.length;
}
// [2, 6, 4] -> 0 / 2 / 8 / 12

// Do calculations
john.calcTip();
mark.calcTip();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + ' \'s family pays higher tips, with an average of $ ' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + ' \'s family pays higher tips, with an average of $ ' + mark.average);
} else {
    console.log('Their average is the same');
};
