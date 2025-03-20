const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON bodies
app.use(express.json());

// Handle booking requests
app.post("/book", (req, res) => {
    const { name, service, date } = req.body;

    // Simulate saving the booking to a database
    console.log("New booking received:");
    console.log(`Name: ${name}`);
    console.log(`Service: ${service}`);
    console.log(`Date: ${date}`);

    // Send a success response
    res.status(200).json({ message: "Booking successful!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});