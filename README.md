# GDG Js Crash Course week 4 - Http server with Express

This is a repo going over the steps taken during the fourth lessons of the London GDG group JS course.

# Steps

- setup

  - npm init and install express
  - setup basic listening server on `server.js`
  - install and setup nodemon for easy reload with `npm start` script

- hello world

  - send a string as a response
  - inspect the cookie-cutter html file and remember the js script
  - send the file instead

- serve multiple files

  - uncomment the script and css and check the error
  - create new route to serve js
  - copy/paste for css
  - use express static instead

- form and post
  - create route for the `newsletter.html` page
  - handle request by saving it to file and sending a success message

# Detailed instructions

1. Setup your Express installation

   - initialise the local npm package with `npm init` and install express with `npm install express`
   - create a file called `server.js` and write the logic for a basic Express server listening on port 3000
   - install nodemon with `npm install nodemon` and change the `start` script in `package.json` to be `nodemon server.js`
   - run, in your shell `npm start`. This will run nodemon, which looks for changes in your .js files and reload the server

2. Create a 'hello world' route

   - create a route for the root path (`/`) that will send back a simple `hello world` string
   - take a look at the `index.html` file that comes with this repo. Notice the `<script>` section and the console.log() in it
   - update the route for `/` to send back the content of `index.html` rather than a simple string (you can use the `request.sendFile()` method)

3. Serve multiple files

   - back in the `index.html` file, uncomment the script and css tags. Reload the page and notice the client-side errors in the dev tools
   - create a new route to serve the `main.js` file and move the console.log statemente in it, removing the value from the html file
   - create a new route to serve the `main.css` file, create the file itself, and add some basic styling
   - to avoid repetition, refactor away the 2 routes you have for the js and css file, and use the `express.static()` helper instead to automatically serve the content of a folder

4 Forms and POST requests
   - inspect the `newsletter.html` file and create a new route to serve it
   - create a new route to handle the POST request that the form send (the path will be `/register` if the html has not been changed), that sends back a confirmation string
   - update the route logic to parse the content of the form (you can `npm install body-parser` for this), and append it to a local file called `subscriptionList.txt`.

