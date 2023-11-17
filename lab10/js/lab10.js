//
// author: evelyn anguiano
// date: november 223



function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue for person 1
    const person1Text = generateRandomText();
    // get new fake dialogue for person 2
    const person2Text = generateRandomText();

    // append a new div for person 1 to our output div
    $("#output").append('<div class="text person1"><p>' + person1Text + '</p></div>');
    // append a new div for person 2 to our output div
    $("#output").append('<div class="text person2"><p>' + person2Text + '</p></div>');
});