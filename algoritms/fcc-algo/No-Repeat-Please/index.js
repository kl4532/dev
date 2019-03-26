function heap(letters, size, permuted){
  if (size === 1){
    permuted.push(letters.join(''));
    return;
  }
  for (let i=0; i<size; i++){
    heap(letters, size-1, permuted);
    // when size of array is odd - swap first and last element
    if(size%2==1){
      [ letters[size-1], letters[0] ] = [ letters[0], letters[size-1] ];
    }else{ // when size of array is even - swap i-element and last element
      [ letters[size-1], letters[i] ] = [ letters[i], letters[size-1] ];
    }
  }
  //console.log(letters);
}
function repeat(str) {
    let patt = /([a-z])\1/;
    let result = patt.test(str);
    return result;
}
// Main function
function permAlone(str) {
  let permuted = [];
  let permutedNoRepeat = [];
  // Split letters creating array array of them
  let letters = str.split('');
  let size = letters.length;
  // Call permutation algorithm
  heap(letters, size, permuted);
  // Check for repeats
  permuted.forEach((word)=>{
    if(!repeat(word)){permutedNoRepeat.push(word)};
  });
  // Output
  console.log(permutedNoRepeat.length);
  return permutedNoRepeat.length;
}

permAlone('aab');
