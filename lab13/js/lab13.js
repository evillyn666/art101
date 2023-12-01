// FizzBuzz 
// evelyn anguiano
// november 2023



function fizzBuzz() {

    let oneLongString = "";

    for (let num = 1; num <= 200; num++) {
        // Check for multiples of 3, 5, and 7
        if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
            oneLongString += num + " FizzBuzzBoom!<br>";
        } else if (num % 3 === 0 && num % 5 === 0) {
            oneLongString += num + " FizzBuzz!<br>";
        } else if (num % 3 === 0 && num % 7 === 0) {
            oneLongString += num + " FizzBoom!<br>";
        } else if (num % 5 === 0 && num % 7 === 0) {
            oneLongString += num + " BuzzBoom!<br>";
        } else if (num % 3 === 0) {
            oneLongString += num + " Fizz!<br>";
        } else if (num % 5 === 0) {
            oneLongString += num + " Buzz!<br>";
        } else if (num % 7 === 0) {
            oneLongString += num + " Boom!<br>";
        } else {
            oneLongString += num + "<br>";
        }
    }

    // 'output' div
    $("#output").html(oneLongString);
}
// fizzBuzz function
fizzBuzz();

