// Select the form and response div
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

    // Send data to Google Sheets
    const formData = {
        name: name,
        email: email,
        choice: choice.value,
        dropdown: dropdown,
        comments: comments
    };

    fetch("https://script.google.com/macros/s/AKfycbxxinno6sxW4PoIZJKjVerPOedeVFJsz9AIj_nhexbYmqjwiAulZXNgavtygoMl1C3lgg/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert("Response Submitted!");
        document.getElementById('response').innerHTML = `
            <p>✅ Form Submitted Successfully!</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Choice:</strong> ${choice.value}</p>
            <p><strong>Dropdown:</strong> ${dropdown}</p>
            <p><strong>Comments:</strong> ${comments || "No comments provided."}</p>
        `;
        
        // Clear form fields
        document.getElementById("googleForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
