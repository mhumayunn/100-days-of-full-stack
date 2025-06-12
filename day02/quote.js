function generateQuote() {
    const array = ['The little progress you have made today still matters!', 'Failure is a part of learning', 'Risking is better than regretting!', 'Sometimes we outgrow people who arent growing', 'Focus on the step infront of you,not the whole staircase!', 'Grow in your own time!'];
    //i want to randomly pick a quote from any one of the quotes in the array
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomQuote = array[randomIndex];
    //you wsant to set quote in <p> tag
    document.getElementById("quote-output").textContent = randomQuote;
}