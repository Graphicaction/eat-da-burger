// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //Adding new burger in the database
    $("#addBurger").on("submit", event => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger_name").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          () => {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
    //Updateing devoured value for the burger in the database
    $(".devourBtn").on("click", function(event) {
      var id = $(this).data("id");
                  
      // Send the Update request.
      var newdevouredState = {
        devoured: 1
      };
      console.log(id, newdevouredState);
      // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newdevouredState
        }).then(
          function() {
            console.log("changed devoured to", true);
            // Reload the page to get the updated list
            location.reload();
          }
        );
  });
});
