var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      var burgersObj = {
        burgers: result
      }
      res.render("index", burgersObj);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {

    // console.log(req.body);

    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(result){
      // console.log(result);
      res.end();
    });
  });

 
   app.put("/api/burgers/:id", function(req, res) {
      

      // console.log(req.body.devoured);
      console.log(req.params.id);
      // console.log(req.body.burger_name);

      db.Burger.update({
        devoured: true, 
      }, {
        where: {
          id: req.params.id
          }
        })
      .then(function(result) {
         if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      });
    });
};