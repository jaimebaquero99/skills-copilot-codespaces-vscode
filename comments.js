// Create web server
// Create a web server that listens on port 8080.
// When you navigate to http://localhost:8080/, the server should respond with "Hello, World!".
// When you navigate to http://localhost:8080/comments, the server should respond with a list of comments in JSON format.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});