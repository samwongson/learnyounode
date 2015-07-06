var fs = require('fs')

fs.readFile(process.argv[2], "utf-8", function(err, data) {
    if (err) throw err;

    var counter = data.split('\n');

    console.log(counter.length-1);
});