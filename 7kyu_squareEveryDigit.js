//Square Every Digit

function squareDigits(num){
  //split number to digits
  output = []
  var sNum = num.toString()
  for (var i =0; i < sNum.length; i++) {
    output.push(+sNum.charAt(i));
  }
  
  //square numbers
  outputSquare = output.map(function(d) {return d*d; });
  
  // join numbers
  squareText = outputSquare.join('');
  squareNum = parseInt(squareText,10);
  return squareNum;
  
}