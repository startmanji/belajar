// script.js

// Function to display an alert when a button is clicked
function showAlert() {
    alert("Button clicked!");
}

// Function to change the text of an element with a specific ID
function changeText(elementId, newText) {
    document.getElementById(elementId).innerText = newText;
}

// Event listener for button click
document.getElementById("myButton").addEventListener("click", showAlert);

// Example of changing text on page load
window.onload = function() {
    changeText("myElement", "Hello, World!");
};