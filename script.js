const texts = [
  "Welcome Back.",
  "I am a passionate human.",
  "All of my projects are available here",
  "I create cool stuff!",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!isDeleting && charIndex <= currentText.length) {
    document.getElementById("typewriter-text").innerHTML =
      currentText.substring(0, charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
  } else if (isDeleting && charIndex >= 0) {
    document.getElementById("typewriter-text").innerHTML =
      currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(type, 100); // Adjust the deleting speed here (in milliseconds)
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500); // Adjust the pause between texts here (in milliseconds)
    } else {
      setTimeout(type, 5000); // Additional short pause after deleting before next text (in milliseconds)
    }
  }
}

// Start the typing animation when the page loads
window.onload = type;
