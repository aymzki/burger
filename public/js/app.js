$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#enterBurger").val().trim(),
        };
        console.log(newBurger);
        //Send the POST request.
        $.ajax("/burgers/insertOne", {
            type: "POST",
            data: newBurger,
        }).then(
            function () {
                console.log("new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    })



    $(".devour-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);

        // Send the PUT request.
        $.ajax("/burgers/updateOne/" + id, {
            type: "PUT",
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
});