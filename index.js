function guessNumber(rating) {
    const feedbackText = document.getElementById("feedback-text");
    const messages = [
        "Need improvement", "Very weak", "Weak", "Below average",
        "Average", "Above average", "Good", "Very good",
        "Excellent", "Outstanding", "Exceptional"
    ];
    feedbackText.innerHTML = messages[rating - 1];
}

function submitFeedback() {
    alert("Thanks for giving your feedback about my frontend project. Your information has been stored safely.");
    resetFeedback();
}

function resetFeedback() {
    document.getElementById("feedback-text").innerHTML = "Outstanding";
}
