var db = require("../models");

module.exports = function(app) {
  
  app.post("/customer/:id", function(req,res){
    console.log("post route hit");

    console.log(req.body.customer);
    console.log(req.params.id);

    db.Customer.create({
      name: req.body.customer
    }).then(function(result){

      console.log(result);
      res.redirect("/");
    });
  });
  // PUT
}