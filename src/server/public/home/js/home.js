document.addEventListener('DOMContentLoaded', function() {
    // Initialize the home page functionality
    console.log('Home page loaded successfully.');

    // Add event listeners
    const mainButton = document.getElementById('main-button');
    if (mainButton) {
        mainButton.addEventListener('click', async () => {
            alert(`The Auth Service Base URL is: ${ENV.AuthService_BaseURL}`);
        });
    } else {
        console.error('Main button not found.');
    }
});