document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission
  
      // Display the success message
      successMessage.style.display = "block";
  
      // Optionally reset the form
      form.reset();
  
      // Hide the message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    });
  });
  