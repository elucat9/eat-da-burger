var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


// routes
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Get
app.get("/", function (req, res) {
  connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) throw err;

    res.render("index", { burgers: data });
  });
});


//Update
//app.put function




// Post 
app.post("/", function (req, res) {


  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function (err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
