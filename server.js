const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to save responses
app.post('/save-response', (req, res) => {
    const response = req.body;
    // Save the response to your database (MongoDB, SQL, etc.)
    console.log(response); // For now, just log it to console
    res.status(200).send('Response saved!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
