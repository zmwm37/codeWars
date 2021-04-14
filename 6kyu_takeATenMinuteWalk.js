function isValidWalk(walk) {

  // is the length 10?
  if (walk.length === 10)  {

    // map n/e to + and s/w to -
    let val = [];

    walk.map(function(d,i) {
      if(d === 'n' || d === 'e') {
        return val[i] = 1
      } else {
       return val[i]= -1
      }
    })

    // combine arrays into array of objects
    var walkCombo = walk.map(function(d, i) {
      return {direction: d, value: val[i]}
    });

    // filter array to n/s, e/w and sum
    let y = walkCombo.filter((d) => (d.direction === 'n' || d.direction === 's'))

    if(y.length > 0) {
      var ySum = y.reduce((a,b) => a + b.value,0);
    } else {
      var ySum = 0
    }

    let x = walkCombo.filter((d) => (d.direction === 'e' || d.direction === 'w'))

    if(x.length > 0) {
      var xSum = x.reduce((a,b) => a + b.value,0);
    } else {
      var xSum = 0
    }


    // is position back at (0,0)?
    if (ySum === 0 & xSum === 0) {
      return true;
    } else {
      return false;
    }
  //false if length is not 10
  } else {
    return false;
  }
}
