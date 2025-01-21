const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve the HTML file directly from your root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'trylagi.html')); // Ensure "index.html" exists in "C:\try website"
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
