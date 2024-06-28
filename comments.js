// Create Web Server
// 1. Create a web server (express)
// 2. Create a route to get comments
// 3. Create a route to add a comment
// 4. Create a route to update a comment
// 5. Create a route to delete a comment
// 6. Listen on port 3000
// 7. Test using Postman

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let comments = [
    {
        id: 1,
        name: 'John',
        comment: 'Hello World!'
    },
    {
        id: 2,
        name: 'Jane',
        comment: 'Hi there!'
    }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newComment = req.body;
    const index = comments.findIndex(comment => comment.id === id);
    comments[index] = newComment;
    res.json(newComment);
});

app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.json({ id });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Test using Postman
// 1. GET http://localhost:3000/comments
// 2. POST http://localhost:3000/comments
//     Body: { "id": 3, "name": "Alice", "comment": "Good morning!" }
// 3. PUT http://localhost:3000/comments/3
//     Body: { "id": 3, "name": "Alice", "comment": "Good afternoon!" }
// 4. DELETE http://localhost:3000/comments/3
