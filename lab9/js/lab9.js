/*
 * Author: Evelyn Anguiano
 * Created: 12 November 2023
 */



// add button to minor section

$(".minor-section").append("<button id= 'button-minor-section'>Click Me!</button>");

// add a click listener to the minor section button
$(".minor-section").click(function(){
    alert ("Hello World!");

});