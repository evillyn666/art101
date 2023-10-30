// Author: Evelyn Anguiano
// Date: 27 October 2023

// Define Variables
 myTransport = ["legs" , "bus" , "bike" , "1995 Ford Taurus w recently repaired waterpump"] 
 
 myMainRide = {
     make: "Ford", 
     model: "Taurus", 
     color: "Rusty", 
     year: 1995, 
     age: function () {
        return 2023 - this.year;
    }
};

// output 
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln(
    "My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, "\t"),
    "</pre>"
);

