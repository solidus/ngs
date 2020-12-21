const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Foo Bar Baz\n');
});

server.listen(8181, () => {
  console.log('Server is running...');
});
