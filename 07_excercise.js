var http = require('http');

var callback_function = function(response) {
  response.setEncoding('utf8');
  response.on('data', function(chunk) {
    console.log(chunk);
  })
};

var url = process.argv[2];


http.get(url, callback_function);

