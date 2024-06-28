// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON
app.use(bodyParser.json());

// Create a comments array to store comments
const comments = [];

// Create a route to get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Create a route to post comments
app.post('/comments', function(req, res) {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).json(comment);
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});