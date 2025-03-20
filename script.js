document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");
    const serviceInput = document.getElementById("service");
    const bookingForm = document.getElementById("booking-form");

    // When a service is clicked, populate the form
    services.forEach(service => {
        service.addEventListener("click", () => {
            const selectedService = service.getAttribute("data-service");
            serviceInput.value = selectedService;
        });
    });

    // Handle form submission
    bookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        const bookingData = { name, service, date };

        try {
            const response = await fetch("/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                alert("Booking successful!");
                bookingForm.reset();
            } else {
                alert("Booking failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    });
});