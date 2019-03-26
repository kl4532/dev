function pairwise(arr, arg) {
  let pairs = []; // array of pairs
  let used = []; // for index already used
  let result = 0;
  // loop for all combination of paris sum
  for(let i = 0; i< arr.length; i++){
    for(let j = 0; j< arr.length; j++){
      if(i==j){ // exclude combination element with itself
        continue;
      }
      if((arr[i]+arr[j] == arg)){ // check if sum matches arg value
        if(used.includes(i) || used.includes(j)){ // if indexes already used -> continue
          continue;
        }else{ // if not push matched pair and used indexes
          used.push(i);
          used.push(j);
          pairs.push([i,j]);
        }
      }
    }
  }
  // Sum matched pairs in arrays, and sum all results
  for(let i =0; i<pairs.length;i++){
    result += pairs[i].reduce(getSum);
  }
  //console.log(result);
  return result;
}
function getSum(total, num) {
  return total + num;
}
pairwise([1, 4, 2, 3, 0, 5], 7);
