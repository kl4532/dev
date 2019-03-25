// Task link
// https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference/

function sym(args) {
  let result=arguments[0];
  let resTemp = [];

  for (let i = 1; i < arguments.length; i++) {
      for(let j=0; j<arguments[i].length; j++){
        if(!result.includes(arguments[i][j])){
          resTemp.push(arguments[i][j]);
        };
      }
      for(let j=0; j<result.length; j++){
        if(!arguments[i].includes(result[j])){
          resTemp.push(result[j]);
        };
      }
      result = resTemp;
      resTemp = [];
    }
    //console.log(result);
    result = new Set(result);
    result = Array.from(result).sort((a, b) => a - b);
  return result;
}
//sym(1,2,3);

//document.getElementById("out").textContent = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
