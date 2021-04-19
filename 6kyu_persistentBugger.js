// Persistent Bugger

function persistence(num, count) {
  // test if positive and less than 10
  if(num < 10 && num >= 0){
    return 0;
  }
  count = count || 1

  // if p is undefined, set n as num. else set n as p
  if(typeof(p) == 'undefined'){
    var n = num;
  } else {
    var n = p;
  }

  var p = 1;
  // parse number into digits and multiply, length >1?
  var sNum = num.toString();
  for (var i = 0; i < sNum.length; i++) {
    p *= sNum[i];
  }

  // recursively iterate until p is one digit
  return p.toString().length > 1 ? persistence(p, count + 1) : count;
}
