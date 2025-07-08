document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            console.log("Submitting:", { name, email, message });

            try {
                const response = await fetch("http://localhost:3000/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message }),
                });

                const data = await response.json();
                console.log("Response from server:", data);
                document.getElementById("responseMessage").innerText = data.message;
            } catch (error) {
                console.error("Error sending message:", error);
                document.getElementById("responseMessage").innerText = "Error sending message. Please try again.";
            }
        });
    } else {
        console.error("❌ contactForm not found!");
    }
});
