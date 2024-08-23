const Profile = require('./profile.js');
const renderer = require('./renderer.js');

// Handle HTTP route GET / and POST /i. e. Home
function home(request, response) {
  // if url == '/' && GET
  if (request.url === '/') {
    // show a search
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    renderer.view('header', {}, response);
    renderer.view('search', {}, response);
    renderer.view('footer', {}, response);
  }
  // if url == '/' && POST
  // redirect to /:username
}

// Handle HTTP route GET /:username i.e. .[user name]
function user(request, response) {
  // if url == '/........'
  let username = request.url.replace('/', ''); // remove '/'
  if (username.length > 0) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    renderer.view('header', {}, response);

    // get json from Treehouse
    var studentProfile = new Profile(username);
    // on 'end'
    studentProfile.on("end", function (profileJSON) {
      // show profile

      //store the value which we need
      const values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        jsPoints: profileJSON.points.JavaScript
      };
      // simple response
      // response.write(`${values.username} has ${values.badges} badges\n`);
      renderer.view('profile', values, response);
      renderer.view('footer', {}, response);
    });

    // on 'error'
    studentProfile.on("error", function (error) {
      // show error
      // response.write(`Error: ${error.message}\n`);
      renderer.view('error', { errorMessage: error.message }, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
    });
  }
}

module.exports.home = home;
module.exports.user = user;