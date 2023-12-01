// 
// this is an experimient with basic webpage manipulation
// auhtor : evelyn anguiano
// date : november 2023

console.log("javascript is working:");

$("#my-button").click(function(){
    // console.log("Button clicked!");
    // var name = prompt("What is your name?");
    var name = $("#input").val()

    console.log("Prompt returned: " + name);

    newText = "hello" + name + "!";
    $("#title").html(newText);
});

