// Get elements
const popup = document.getElementById("data-source-popup");
const openButton = document.getElementById("data-source-button");
const closeButton = document.getElementById("close-popup");
const okButton = document.getElementById("ok-button");

// Open the pop-up
openButton.addEventListener("click", () => {
    popup.style.display = "flex"; // Show the modal
});

// Close the pop-up
closeButton.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the modal
});

// Close pop-up when "OK" button is clicked
okButton.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the modal
});

// Close pop-up when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
