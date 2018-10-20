                                                                    // // 1. The sum of range
// function range(start, end, step = 1) {
//   let arr = [];
//   if (step > 0) {
//     for (var i = start; i <= end; i += step) {
//       arr.push(i);
//       console.log(arr);
//     }
//   } else if (step < 0) {
//     for (var i = start; i >= end; i += step) {
//       arr.push(i);
//       console.log(arr);
//     }
//
//   } else {
//     arr = 0;
//   }
//   return arr;
// }
//
// function sum(arr) {
//   let result = 0;
//   for (var i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return console.log(result);
// }
// sum(range(4, 23));
                                                                            // 2. Reversing an array
// function reverseArray(arr){ //with 2 arrays
//   let new_array = [];
//   for(var i=arr.length-1; i>=0; i--)
//   {new_array.push(arr[i]);
//   }
//   console.log(new_array);
// }
// function reverseArrayInPlace(arr){    // with 1 array
//   for(var i=0; i<Math.floor(arr.length/2); i++)
//   {
//     let temp = arr[i]; // 1 step: arr[0](1) / 2 step: arr[1](2)...
//     arr[i] = arr[arr.length-1 - i]; // 1 step: arr[0]=arr[5] 2 step: arr[1]==arr[4] ...
//     arr[arr.length-1 - i] = temp; //  1 step: arr[5]=arr[0] 2 step: arr[4] == arr[1]...
//   }
//   console.log(arr);
// }
// let array = [];
// for(var i=0; i<10000; i++)
// {
//   array.push(i);
// }
//
// //reverseArray(array);
// reverseArrayInPlace(array);
                                                                            // 3. A list
//
// function arrayToList(array){
//   let listFromArray;
//   for(i=array.length-1; i>=0; i--)
//   {
//     listFromArray = {value: array[i], rest: listFromArray};
//   }
//   return listFromArray;
// }
// let arr = [1,2,3,4];
// let newArray = [];
// let newList = arrayToList(arr);
// console.log(listToArray);
// function listToArray(list){
//     }
// }
                                                                            // not finished
                                                                            // 4. Deep comparison
//
function deepEqual(val1, val2){

if(typeof(val1) == "object" && typeof(val2) == "object" && val1!==null && val2!==null){ // go inside if both are objects
  let prop1 = Object.keys(val1);    // create array of object properties
  let prop2 = Object.keys(val2);
  let result=false;
  for (var i=0; i<prop1.length; i++)    // compare properties of both objects
    {
      if(deepEqual(prop1[i], prop2[i]))     // go inside if both properties are equal -> recursion
      {
        result = deepEqual(val1[prop1[i]],val2[prop2[i]]);
        if(result==false){break};   // check equality of values of properties
      }else result=false;
    }
    return result;
}else if(val1===val2)
{
  return true;
}else{ return false;}
}
kat1 = {age: 21, name: {first: "Kate", surname: "Kotovich"}, mood: "wriedna_ukrainka", iq:122};
kat2 = {age: 21, name: {first: "Kate", surname: "Kotovich"}, mood: "liguszka :)", }, iq:122;

a = 12;
b = 10;
console.log("object: " + deepEqual(kat1, kat2));
console.log("num: " + deepEqual(a,b));
