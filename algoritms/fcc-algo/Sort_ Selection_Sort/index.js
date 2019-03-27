function selectionSort(arr) {
  // change code below this line
  let s_index = 0; // at start s_index begins with first element of array
  let smallest = arr[0]; // as above
  for(let j=0; j<arr.length; j++){
    smallest = arr[j];
    s_index = j;
      for(let i = j; i<arr.length; i++){ // with every next loop(j) array become more narrow(count from beginning)
        if(arr[i] < smallest){
          smallest = arr[i]; //find smallest number in current range
          s_index = i; // assign index of smallest num
        }
      }
      [arr[j], arr[s_index]] = [arr[s_index], arr[j]]; // swap first in current arr length element with smallest element in current arr length
  }
    console.log(arr);
  // change code above this line
  return arr;
}

// test array:
let arr = [1, 4, 2, 0, 8, 0, 0, 3]
selectionSort(arr);
