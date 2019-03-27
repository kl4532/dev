function bubbleSort(arr) {
  let end;
  while(!end){
    end = true;
    for(let i=0; i< arr.length; i++){
      if(i+1<arr.length && arr[i]>arr[i+1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; // swap with destructing
        end = false;
      }
    }
  }
  console.log(arr)
  return arr;
}

// test array:
let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
bubbleSort(arr);
