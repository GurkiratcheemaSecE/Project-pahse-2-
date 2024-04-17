document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        // Simple validation logic
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
        } else {
            alert('Thank you for contacting us!');
            form.reset(); // Reset the form after submission
        }
    });
});
