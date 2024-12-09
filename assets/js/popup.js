// Get elements
const popup = document.getElementById("data-source-popup");
const openButton = document.getElementById("data-source-button");
const closeButton = document.getElementById("close-popup");

// Open the pop-up
openButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Close the pop-up
closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close pop-up when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
