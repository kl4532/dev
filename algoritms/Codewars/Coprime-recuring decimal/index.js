function cycle(n) {
  if(areCoprime(n,10)){
    let num = (10/n).toString();
    var regex = /\b(\S+?)\1\S*\b/;
    var pattern = num.match(regex);
    document.write(num);
    return pattern ? pattern[1].length : -1;
  }else{
    return -1;
  }
}
cycle(69);
//document.write(cycle(22));

// Helpers
function areCoprime(n,m){
  let arrN=[], arrM=[];
  dividers(n, arrN);
  dividers(m, arrM);
  let common = arrN.filter(value => arrM.includes(value))
  return common.length<1 ? true : false;

  function dividers(p, arr){
    for(let i=2; i<p; i++)
    {
      if(p%i==0){
        arr.push(i);
      }
    }
  }
}
