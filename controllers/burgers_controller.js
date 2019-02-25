//import express


var express = require("express");

var router = express.Router();
// import burger.js
var burger = require("../models/burger.js");


//routes

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body.burger_name)
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
   
    //res.json({ id: result.insertId });
    res.redirect("/");
  });
});

// router.put("/burgers/:id", function(req, res) {
//   console.log("PUT")
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//    devoured:true
//   }, condition, function(result) {
  
//      // res.status(200).end();
//       res.redirect("/")
//   })
// });

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({
    devoured: true
  }, condition, function(result) {
    res.redirect('/');
  });
 });



// Export routes for server.js to use.
module.exports = router;
