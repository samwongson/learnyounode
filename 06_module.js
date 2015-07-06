var fs = require('fs');


module.exports = function (directory, extension, callback) {
  var ext = "." + extension;
  var result;
  fs.readdir(directory, function(err, list) {
    if (err) {
      callback(err);
    } else {
      result = list.filter(function(filename) {
        return filename.indexOf(ext, filename.length - ext.length) !== -1;
      });
      callback(null, result);
    }
  });
  

}