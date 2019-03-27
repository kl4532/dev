function insertionSort(arr) {
  // change code below this line
  for(let i = 0; i<arr.length; i++){
    for(let j = i; j>=0; j--){
      if(arr[j]<arr[j-1] && j-1>=0){
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      }
    }
  }
  // change code above this line
  console.log(arr);
  return arr;
}

// test array:
let arr =  [1, 4, 2, 8]
insertionSort(arr);
