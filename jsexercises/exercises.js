// Objects exercises - https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
//                                                                         // 1. Show properties
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//
// console.log(Object.keys(student));
//
//                                                                       // 2. Delete property function
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//
// var deleteProp = (obj, prop) => {delete obj[prop];}; // function declaration
// console.log(Object.keys(student));
// deleteProp(student, "rollno"); //caling the funciton
// console.log(Object.keys(student));
//                                                                         // 3. length of object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// console.log(Object.keys(student).length);
//                                                                         // 4. Display status of read books
// var library = [
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games',
//        readingStatus: false
//    }];
//    function readStatus(library){
//      for(var i=0; i<library.length; i++){
//        library[i].readingStatus ? console.log("You read " + library[i].title + "by " + library[i].author) :
//        console.log("You didn't read " + library[i].title + "by " + library[i].author);
//      }
//    }
//    readStatus(library);
//                                                                      // 5. Write a JavaScript program to get the volume of a Cylinder
//                                                                      // with four decimal places using object classes. (V = πr2h)
// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;
//   this.volume = function() {
//     return Math.PI*this.height*(this.diameter/2)**2;
//   };
// }
// // Cylinder.prototype.volume = function () {
// //     return Math.PI*this.height*(this.diameter/2)**2;
// // };
// var myPisun = new Cylinder(4,17);
//
// console.log(myPisun.volume().toFixed(4));

                                                                      // 6. Bubble sort algoritm
// function sort(a){
//   var par;
//   n = a.length;
// while(n>0)
// {
//   for(var i=0; i<a.length; i++){
//     par = a[i];
//     if(a[i]>a[i+1])
//     {
//       a[i] = a[i+1];
//       a[i+1] = par;
//     }
//   }
//   n--;
// }
//   return a;
// }
// var unsorted1 = [6,4,0, 3,-2,1];
// //var unsorted2 = [9,8,7,6,5,4,3,2,1,0];
// console.log(sort(unsorted1));
// 7. Write a JavaScript program which returns a subset of a string
//???
                                                                      // 8. Clock - show time every second.
window.setInterval(showTime, 1000);
function showTime(){
  var d = new Date();
  console.clear();
  console.log(d.getHours() + ":"+ d.getMinutes() + ":" + d.getSeconds());
  document.getElementById('clock').innerHTML = d.getHours() + ":"+ d.getMinutes() + ":" + d.getSeconds();
}
