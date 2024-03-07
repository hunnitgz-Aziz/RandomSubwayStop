const express = require('express');
const fs = require('fs');

const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route to generate and serve the random name
app.get('/randomName', (req, res) => {
    // Read the JSON file
    fs.readFile('subway-stops.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);

            // Get an array of keys (ids) from the JSON object
            const keys = Object.keys(jsonData);

            // Select a random key (id) from the array
            const randomKey = keys[Math.floor(Math.random() * keys.length)];

            // Get the name from the randomly selected object
            const randomName = jsonData[randomKey].name;

            // Send the random name as the response
            res.send(`${randomName}`);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
