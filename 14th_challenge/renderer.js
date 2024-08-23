const fs = require('node:fs');

function view(templateName, values, response) {
  // read from the template file
  const fileContents = fs.readFileSync(`./views/${templateName}.html`)
      // insert values in to the content
      // write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;