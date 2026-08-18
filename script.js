document.addEventListener("DOMContentLoaded", () => {

    // Simple button interaction
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            if (button.textContent.includes("Contact")) {
                alert("Support team will contact you shortly.");
            }

            if (button.textContent.includes("View Details")) {
                alert("Appointment with Dr. Ananya Sharma\n20 August 2026 at 10:30 AM");
            }

        });

    });

});
