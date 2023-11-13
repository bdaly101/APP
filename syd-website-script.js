function giveAnswer(answer) {
    var responseElement = document.getElementById("answer");
    if (answer === 'yes') {
        responseElement.innerHTML = "Uh yeah, like obviously.";
    } else {
        responseElement.innerHTML = "Wrong dumbass, try again.";
    }
}
