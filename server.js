//APP SET-UP
//-------------------------------------------------------------------------------------------------
//npm init - make a package.json file 
//npm install express
//npm install express-handlebars.
//npm install mysql
//Require the express npm package inside of the server.js file:

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// static content 
app.use(express.static("public"));

// Parse 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Listener
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});



