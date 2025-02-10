document.getElementById('examinationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting (for demo)

    // Gather form data (you'll likely want to send this to a server)
    const formData = new FormData(this);

    // For demonstration, let's just log the data to the console
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    alert('Form submitted! (Data logged to console)');
});