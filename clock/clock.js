// Function to update the time dynamically (optional)
function updateTime() {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    document.querySelector('h1').textContent = time;
}

// Call the updateTime function every second
setInterval(updateTime, 1000);