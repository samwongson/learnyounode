var fs = require('fs')

var extension = "." + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  list.forEach(function(filename) {
      if (filename.indexOf(extension, filename.length - extension.length) !== -1) {
        console.log(filename);
      }
    });
});