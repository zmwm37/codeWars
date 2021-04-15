// Persistent Bugger

function persistence(num) {
   //code me
  var z = 1;
  var n = num;
  var p = 1;
  // parse number into digits and multiply, length >1?
  while(n.toString().length > 1) {

    var sNum = num.toString();
    for (var i = 0; i < sNum.length; i++) {
      p *= sNum[i];
    }
    
    n = p
    
    // add to counter
    if(n.toString().length > 1) {
      z++
    }
    
  }

  // return counter
  return z;
}
