
var addSum = function(argument) {
  var total = 0;
  for (var i = 2; i <= argument.length - 1; i++) {
    total += Number(argument[i]);
  }
  return total;
}

console.log(addSum(process.argv));