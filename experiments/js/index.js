// 
// this is an experimient with basic webpage manipulation
// auhtor : evelyn anguiano
// date : november 2023

conaole.log("javascript is working:");

$("#my-button").click(function(){
    console.log("Button clicked!");
    var name = prompt("What is your name?");
    console.log("Prompt returned: " + name);
    newText = "hello" + name + "!";
    $("#title").html(newText);
});
