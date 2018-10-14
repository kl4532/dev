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
// //end 1.
// 2. Reversing an array
function reverseArray(arr){ //with 2 arrays
  let new_array = [];
  for(var i=arr.length-1; i>=0; i--)
  {new_array.push(arr[i]);
  }
  console.log(new_array);
}
function reverseArrayInPlace(arr){    // with 1 array
  for(var i=0; i<Math.floor(arr.length/2); i++)
  {
    let temp = arr[i]; // 1 step: arr[0](1) / 2 step: arr[1](2)...
    arr[i] = arr[arr.length-1 - i]; // 1 step: arr[0]=arr[5] 2 step: arr[1]==arr[4] ...
    arr[arr.length-1 - i] = temp; //  1 step: arr[5]=arr[0] 2 step: arr[4] == arr[1]...
  }
  console.log(arr);
}
let array = [];
for(var i=0; i<10000; i++)
{
  array.push(i);
}

//reverseArray(array);
reverseArrayInPlace(array);
// end 2.
