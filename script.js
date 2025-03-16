// Select the form and response div
document.getElementById('googleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const choice = document.querySelector('input[name="choice"]:checked');
    const dropdown = document.getElementById('dropdown').value;
    const comments = document.getElementById('comments').value;

    // Validate selection
    if (!choice) {
        alert("Please select a choice before submitting.");
        return;
    }

    // Display response
    document.getElementById('response').innerHTML = `
        <p>✅ Form Submitted Successfully!</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Choice:</strong> ${choice.value}</p>
        <p><strong>Dropdown:</strong> ${dropdown}</p>
        <p><strong>Comments:</strong> ${comments || "No comments provided."}</p>
    `;

    // Clear form fields
    this.reset();
});
