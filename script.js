document.getElementById('menu-button').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your logic to handle form submission here, such as sending data to the server
    alert('Appointment submitted successfully!');
    // Reset form fields
    this.reset();
});