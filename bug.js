const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a very basic example and won't have any uncommon error. Uncommon error example would be in more complex app.