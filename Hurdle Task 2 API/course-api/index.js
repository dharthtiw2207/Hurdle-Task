const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

let courses = [
    { id: 1, title: 'JavaScript Basics', description: 'Learn JS from scratch', duration: '6 weeks' },
    { id: 2, title: 'React.js', description: 'Master React fundamentals', duration: '8 weeks' },
    { id: 3, title: 'Python', description: 'Fundamental of Python', duration: ' 10 weeks' },
    { id: 4, title: 'Mathematics', description: 'Learn Algebra and Geometry', duration: '12 weeks' },
    { id: 5, title: 'Physics', description: 'Basics of Mechanics', duration: '14 weeks' }
];

// GET all courses
app.get('/courses', (req, res) => {
    res.send(courses);
});

// POST new course (Add a new course)
app.post('/courses', (req, res) => {
    const { title, description, duration } = req.body;

    // Simple validation to check if required fields are present
    if (!title || !description || !duration) {
        return res.status(400).send('Title, description, and duration are required');
    }

    // Create a new course object with a unique ID
    const newCourse = {
        id: courses.length + 1,
        title,
        description,
        duration
    };

    // Add the new course to the courses array
    courses.push(newCourse);

    // Send back the new course as a response
    res.status(201).send(newCourse);
});

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
