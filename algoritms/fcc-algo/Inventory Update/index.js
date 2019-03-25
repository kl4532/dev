// Task
// https://learn.freecodecamp.org/coding-interview-prep/algorithms/inventory-update/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let exist = false;
    let temp = [];
    // Compare elements of arrays
    for(let i = 0; i< arr2.length; i++){
      for(let j = 0; j < arr1.length; j++){
          if(arr2[i][1] == arr1[j][1]){
            arr1[j][0] += arr2[i][0];
            exist = true;
            break;
          }
      }
      // if element does not exist push it to the temp array
      if(!exist){
        temp.push(arr2[i])
      }else{
        exist = false;
      }
    }
    // push content of temp array to arr1
    temp.forEach((elem)=>{ arr1.push(elem)});

    // Sort array alphabetically // from stackOverflow
    function alph(a, b){
        let A = a[1];
        let B = b[1].toLowerCase();

        A = A.toLowerCase();
        B = B.toLowerCase();

        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
    }
    arr1.sort(alph);
    console.log(arr1);
    return arr1;

}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]  ];


updateInventory(curInv, newInv);


//[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
