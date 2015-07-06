var mymodule = require('./06_module');

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    throw err;
  } else {
    data.forEach(function(filename){
        console.log(filename);
    });
  }
});