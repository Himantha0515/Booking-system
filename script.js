document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded"); // Debugging line

    // Existing login form redirection
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            window.location.href = "./Home.html"; // Redirect to Home page
        });
    }
        // Handle "Get Started" button clicks
    const getStartedButtons = document.querySelectorAll(".get-started-btn");
    getStartedButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "Vendor registration.html"; // Redirect to Vendor Registration Page
        });
    });

    const vendorForm = document.getElementById("vendorForm");

    if (vendorForm) {
        vendorForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Redirect to Thank You page after submission
            window.location.href = "Thankyou.html";
        });
    }
});
