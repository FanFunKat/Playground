// Problem:
// We need a simple way to look at a user's badge count and JavaScript point from a web browser
// Solution:
// Use Node.js to perform the profile look ups and server our template via HTTP

// 1. Create a web server

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function(){
    response.write(new Date() + "\n");
  }, 1000);
  //response.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://<workspace-url>/');


// 2. Handle HTTP route GET / and POST /i. e. Home
  // if url == '/' && GET
    // show a search
  // if url == '/' && POST
    // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. .[user name]
  // if url == '/........'
    // get json from Treehouse
      // on 'end'
        // show profile
      // on 'error'
        // show error

// 4. Function that handle the reading of file and marge in value
  // read from file and get a string
    // merge value in to string