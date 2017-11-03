$(function() {

  $("#newBurger").on("submit", function(event){
    event.preventDefault();
    console.log("button clicked");
    
    var newBurger = {
      burger_name: $("#burger-id").val().trim(),
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New Burger added");
      location.reload();
      }
    )
  });

  $("#newCustomer").on("submit",function(event) {
    
    event.preventDefault();

    var textEntered = $("input:text#person").val();
    console.log("button clicked");
        
  });

 
});