// Create Web Server
// Create a web server that listens to port 3000 and returns a response with the following JSON object:
// { "status": "success", "message": "This is a JSON response" }
// The server should return the JSON object as a response to any request made to the server.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'success', message: 'This is a JSON response' }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
