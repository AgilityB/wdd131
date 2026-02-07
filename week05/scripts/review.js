
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;


const submissionDisplay = document.querySelector("#submission-count");

// Retrieve the current count from localStorage, defaulting to 0
let numSubmissions = Number(window.localStorage.getItem("submissionCount-ls")) || 0;

// Increasing the counter by one
numSubmissions++;

// To store the new count back in localStorage
localStorage.setItem("submissionCount-ls", numSubmissions);

// Display the count to the user
if (submissionDisplay) {
    submissionDisplay.textContent = numSubmissions;
}
