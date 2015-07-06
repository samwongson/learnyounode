var fs = require('fs')


var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var counter = string.split('\n');



console.log(counter.length-1);