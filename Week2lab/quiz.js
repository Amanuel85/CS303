'use strict'

// const students = [
//     { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
//     { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
//     { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
//     { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
//     { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
//   ];
//   let newarr = students .filter(item => item.courses.includes('cs303'))//.reduce(function(accum,nextvalue){return accum+nextvalue},0)
//   console.log(newarr)
//   newarr = students .filter(item => item.courses.includes('cs303')).map(item =>item.grade).
//   reduce(function(accum,nextvalue,index,array){return accum+nextvalue/array.length},0)
//   //console.log(newarr)

//   function pow(num1,num2){
//       let result = 1
//       for (let i = 0;i<num2;i++){
//           result = result*num1
//       }
//   return result}
//   console.log(pow(2,3))

//   function recPow(x,y){
//       if( y=== 1){
//           return x}
//      else {return x* recPow(x,y-1)}
      
//   }


 // Write a Recursive Algorithm for Printing String
  //Characters in Reverse: abc = cba
//   function printCharsReverse(str){
//       let newstr = ""
//       if( str.length ===0){
//           return 
//       }
//       else{printCharsReverse(str.substring(1))
//     console.log(str.charAt(0))}
//   }
  //console.log(printCharsReverse('abc'))
// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// console.log(list)
// let abc = list.next.next.next 
// console.log(abc.value)
// let linkedlist = {value:1}
// linkedlist.next = {value:2};
// linkedlist.next.next = {value:4};
// linkedlist.next.next.next = {value:5}
// console.log(linkedlist)
// let additem = {value:'new item'}
// //let linkedlist2 = 
// linkedlist = {'value':'new item',next:linkedlist}
// let linkedlist2 = linkedlist.next.next
// linkedlist.next = null
// linkedlist.next = linkedlist2
// console.log(linkedlist)
// //console.log(linkedlist2)
// function pow(x, n) {

//     if (n == 1) {
 
//          return x;
 
//        } else {
 
//             return x * pow(x, n - 1);
//      }
 
//  }
 
//  console.log( pow(2, 0) );
// let node1 = {value: 50, next: null};
// let head = {value: 10, next: node1};
// head = {"value":5,next: head}

// console.log(head)
// function factorial(n){
//     if(n===1){return 1}
//     else {return n*factorial(n-1)}
//     }
//     console.log(factorial(5))
//     console.log(factorial(6))
// function anysum (){
//     let sum = 0 
//  for (let i = 0 ;i<arguments.length;i++){
//      sum = sum+arguments[i]

//  }
// return sum}
// console.log(anysum(5,10,20,30,))

// let x = 1;
// function foo() {
// let y = 2;
// function bar() {
// let z = 3;
// function baz() {
// console.log(z);
// console.log(y);
// console.log(x);
// //console.log(w);
// }
// baz();
// }
// bar();
// }
// foo();

// function fib(n){
//   if(n===0 ){
//     return 0
//   }
//   if(n===1){
//     return n
//   }
//   else return fib(n-1)+fib(n-2)
// }
// console.log(fib())

// function revstring(str){ //abcdf
//   let n = str.length 
//   let z = []
//   if(n===0){
//     return ""
//   }
//   else{ return revstring(str.substr(1))+ str.charAt(0)
//   //console.log(str.charAt(0)) 
// }
// }

// console.log(revstring('abcde'))
//let an = "abcd"
//console.log(an[an.length-2])//
///
// function sumarray(arr){
//   if(arr.length ===1){
//     return arr[0]
//   }
//   else {return arr.pop() + sumarray(arr)}
// }
// console.log(sumarray([4,5,6]))

function likeCount(){
  let like =0;
  function addlike() {
    like +=1
  }
  addlike()
  console.log("like count",like)
}
likeCount()
likeCount()