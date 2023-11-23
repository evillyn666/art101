// 
// author: evelyn anguiano
// date: november 2023


// Return Flutter Shy, Rarity, Pinky Pie, Twilight Sparkle, Apple Jack, and Raindbow Dash
function sortingHat(str) {
    len = str.length;
    mod = len % 6;
    if (mod == 0) {
        return "FlutterShy"
    }
    else if (mod == 1){
        return "Rarity"
    }
    else if (mod == 2){
        return "Pinky Pie"
    }
    else if (mod == 3){
        return "Twilight Sparkle"
    }
    else if (mod == 4){
        return "Apple Jack"
    }
    else if (mod == 5){
        return "Rainbow Dash"
    }
}
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var character = sortingHat(name);
    newText = "<p> ଘ(੭*ˊᵕˋ)੭ You are " + character +  "✧˖° ♡ " + "</p>";
    document.getElementById("output").innerHTML = newText;
})