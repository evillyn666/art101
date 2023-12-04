// evelyn anguiano 
// december 2023



// using the $.ajax() method
$.ajax({
    url: "https://yesno.wtf/api",
    data: {
        "answer": "yes",
        "forced": false,
        "image": "https://yesno.wtf/assets/yes/2.gif",
    },
    type: "GET",
    dataType: "json",
    success: function(data) {
        // Parse the JSON data and display in the 'output' div
        var result = JSON.stringify(data); // Convert data to a string
        $('#output').text(data.image);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }

});