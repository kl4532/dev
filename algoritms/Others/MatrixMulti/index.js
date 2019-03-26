function multiply(arr1, arr2){
  //if(arr1.columns == arr2.rows) -> OK
  let row = [];
  let res = [];
  if(!ifPossible(arr1, arr2)){
    console.log('Cannot multiply');
    return;
  };
  let sum = 0;
  for(let i = 0; i< arr1[0].length; i++){
    for(let j = 0; j<arr2.length; j++){
      for(let k =0; k<arr1.length; k++){
        sum += arr1[k][i] * arr2[j][k];
        // fst loop: a1(0,0) * a2(0,0)
        // sc loop: a1(1,0) * a2(0,1)
        // thrd loop: a1(2,0) * a2(0,2)
      }
      row.push(sum); //  sum = (fst+sc+thrd) into array
      sum = 0; // reset sum -> next loop j = 1 ...
    }
    res.push(row);  // push row into result array
    row = []; // reset row -> next loop i = i ...
  }
  // log result
  console.log(res);
}


function ifPossible(arr1, arr2){  // check if multiplication is possible
  let temp; // num of rows in second array
  for(let i = 0; i<arr2.length; i++){
      if(i>0){
        if(temp!==arr2[i].length){
          temp = false;
          break;
        }
      }
      temp = arr2[i].length;
  }
  if(arr1.length == temp){ // final check ->check if number of col in arr1 is equal to num of rows in arr2
    return true;
  }else {
    return false;
  };
}

let arr1 = [[2,-1], [1,4], [3,0]];
let arr2 = [[1,-2,5], [3,0,-3], [2,1,2]];
//
// let arr1 =  [[2,8],[4,-3]];
// let arr2 = [[-5,2], [4,0]];

// let arr1 = [[2,-4,4],[3,0,4]];
// let arr2 =  [[0,-2], [1,3], [5,-7]];

// nie rabotajet
// let arr1 = [[2,-3,5],[1,4,-3], [3,2,2], [-1,1,0], [4,0,-2]];
// let arr2 = [2,1,3,0,-1];

multiply(arr1, arr2);
