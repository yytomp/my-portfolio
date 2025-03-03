// Import express and other modules

// Could add advanced routes, error handling, validation, authentication, data base interction

const express = require('express');
const path = require('path');
const cors = require('cors'); //Cross-Origin Resource Sharing


const app = express();

app.use(express.json());
app.use(cors()); // for front-end access

// Serve static files from the "public" directory



//Define a simple GET route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to return basic personal details

app.get('/about', (req, res) => {
    const aboutMe = {
        name: "Yuyang Peng",
        role: "Junior Front-end developer",
        description: "Passionate about web development, enjoy learning ways of thinking and problem sovling",
        skills: ["Django", "C", "Data Strcture", "JavaScript", "GIT", "APIs"]
    };
    res.json(aboutMe);
});

//Route to return a list of our projects 
app.get('/projects', (req, res) => {
    const projects = [
        { name: "Portfolio Website", description: "sth" },
        { name: "Portfolio 2", description: "sth" }
    ]

    res.json(projects);
});

//Define a route for contact information
app.get('/contact', (req, res) => {
    const contactInfo = {
        email: "yypengTom@gmail.com",
        linked: "blank",
        github: "blank"
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
