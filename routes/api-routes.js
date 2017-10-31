var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(burgerObj){
      console.log(burgerObj);
      res.render("index", burgerObj);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {

    console.log(req.body);

    // db.Burger.create({
    // }).then(function(result){
    //   res.send("workds");
    // })
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/burgers/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burgers", function(req, res) {

  });
};