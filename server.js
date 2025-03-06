// Import express and other modules

// Could add advanced routes, error handling, validation, authentication, data base interction

const express = require('express');
const path = require('path');
const cors = require('cors'); //Cross-Origin Resource Sharing


const app = express();

app.use(express.json());
app.use(cors()); // for front-end access

// Serve static files from the "public" directory

app.use(express.static(path.join(__dirname, 'public')));


//Define a simple GET route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to return basic personal details

app.get('/about', (req, res) => {
    const aboutMe = {
        name: "Yuyang Peng",
        role: "that IT guy - Passionate about web development, enjoy learning ways of thinking and problem sovling",
        description: "The IT team looks after 500+ employee across 3 states. Common devices are windows10/11, ipads, macbooks, barcode scanner, Hp printers,wi-fi,aruba switches, A/V system",
        skills: ["Django", "C", "Data Structure", "JavaScript", "GIT", "APIs"]
    };
    res.json(aboutMe);
});


//Define a route for contact information
app.get('/contact', (req, res) => {
    const contactInfo = {
        email: "yypengTom@gmail.com",
        phone: "0426470217",
        github: "https://github.com/yytomp"
    };
    res.json(contactInfo);
});


// Handle 404 errors for non-existing routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

// Global error handler for the app
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

//Define the Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});
