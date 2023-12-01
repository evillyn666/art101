// Evelyn Anguiano
// 2 November 2023


// sortUserName - a function that takes user input and sorts the letters of their name 
function sortUserName() {
    var userName = window.prompt("Hi, please tell me your name.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    // join string back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;

}

// output
document.writeln("Hey! I've fixed your name : ",
    sortUserName(), "</br>"
);