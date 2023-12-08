// evelyn anguiano 
// december 2023



// XKCD API URL
const ENDPOINT = "https://xkcd.com/614/info.0.json";

// Add button event listener
$("#get-em").click(function(){
    console.log("Click");
  
    // Construct AJAX object
    const ajaxParams = {
        url: ENDPOINT,
        type: "GET",
        dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
    };

    $.ajax(ajaxParams);
});

function ajaxSuccess(comicObj) {
    console.log("Here's what I got:", comicObj);
    const title = comicObj.title;
    const altText = comicObj.alt;
    const imageURL = comicObj.img;

    // Clear previous content
    $("#output").html("");

    // Create and append HTML elements to the "Output" section
    $("#output").append("<h2>" + title + "</h2>");
    $("#output").append("<img src=" + imageURL + " alt='" + altText + "' title='" + altText + "' />");
}

function ajaxError(request, error) {
    console.log("Oops:", request, error);
}

