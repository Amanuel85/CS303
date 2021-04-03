"use strict"

/*
• Use array methods: filter, map, reduce, etc to implement below:
• Question 1: For a given array, sum all the elements which are greater than 20.
• [1, 50, 40, 3, 10] => Print result: 90
• Question 2: For a given String array, return a new array which contains all
string, length is greater than and equals to 5, and contains letter ‘a’.
• Question 3:
• Create a constructor function Employee with properties: firstName, lastName, birthdate:
Date type, methods: getFullName(), getAge()
• Create an array with a few Employee objects with different firstName, lastName, birthdate.
• Find if there is any employee which age is greater than 20
• Return a String array which contains the full name of employee and born after 2000
*/

//1  For a given array, sum all the elements which are greater than 20.
// [1, 50, 40, 3, 10] => Print result: 90

let arr = [1, 50, 40, 3, 10];
let arraySum = arr.filter(item => item >20).reduce(function(accum,nextvalue){
    return accum+nextvalue;
},0);
console.log("Expect 90:",arraySum);
//Question 2: For a given String array, return a new array which contains all
//string, length is greater than and equals to 5, and contains letter ‘a’.
let strArray  = ["JavaScript","Advanced JavaScript","JavaScript frame works","CSS","HTML","Hello world"]
let longArray = strArray.filter(item =>item.length>=5).filter(item => item.includes("a") );
console.log(longArray);
/* Create a constructor function Employee with properties: firstName, lastName, birthdate:
Date type, methods: getFullName(), getAge()
Create an array with a few Employee objects with different firstName, lastName, birthdate.
Find if there is any employee which age is greater than 20
Return a String array which contains the full name of employee and born after 2000

*/
/**
 * 
 * @param {firstName} firstName //
 * @param {lastName} lastName //
 * @param {birthdate} birthdate //
 * @returns{new person}//
 */
function Employee(firstName,lastName,birthdate){
this.firstName = firstName,
this.lastName = lastName,
this.birthdate = new Date(birthdate) ,
this.getFullname = function (){
    return this.firstName +" "+ this.lastName;
},
this.getAge = function(){
    let bdate = this.birthdate.getFullYear();
    let now = new Date().getFullYear();
    return  now-bdate};
}
let person1 = new Employee("Jhon","Doie","1990-01-16"); 
let person2 = new Employee("Mike","Dean","1980-05-06"); 
let person3 = new Employee("Simon","Beau","2000-05-26"); 
let person4 = new Employee("Alexa","Duke","2011-07-15"); 
let person5 = new Employee("Jena","Holand","2001-05-26"); 
let person6 = new Employee("pete","Luke","1996-07-04"); 

let newarray = [];

let emp1 = {firstName:person1.firstName,lastName:person1.lastName,fullname:person1.getFullname(),birthdate:person1.birthdate.getFullYear(),age:person1.getAge()};
let emp2 = {firstName:person2.firstName,lastName:person2.lastName,fullname:person2.getFullname(),birthdate:person2.birthdate.getFullYear(),age:person2.getAge()};
let emp3 = {firstName:person3.firstName,lastName:person3.lastName,fullname:person3.getFullname(),birthdate:person3.birthdate.getFullYear(),age:person3.getAge()};
let emp4 = {firstName:person4.firstName,lastName:person4.lastName,fullname:person4.getFullname(),birthdate:person4.birthdate.getFullYear(),age:person4.getAge()};
let emp5 = {firstName:person5.firstName,lastName:person5.lastName,fullname:person5.getFullname(),birthdate:person5.birthdate.getFullYear(),age:person5.getAge()};
let emp6 = {firstName:person6.firstName,lastName:person6.lastName,fullname:person6.getFullname(),birthdate:person6.birthdate.getFullYear(),age:person6.getAge()};
newarray.push(emp1);
newarray.push(emp2);
newarray.push(emp3);
newarray.push(emp4);
newarray.push(emp5);
newarray.push(emp6);
//console.log(newarray)

// Find if there is any employee which age is greater than 20
let above20 = newarray.filter(item => item.age>20).map(item => item.fullname);
console.log("expect 'Jhon Doie', 'Mike Dean', 'Simon Beau', 'pete Luke':",above20)

//Return a String array which contains the full name of employee and born after 2000

let fullname = newarray.filter(item =>item.birthdate>2000).map(item =>item.fullname)
console.log("expect 'Alexa Duke', 'Jena Holand'",fullname)
