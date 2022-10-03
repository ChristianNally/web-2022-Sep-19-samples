const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log('someone has made a request to the server');

  const requestString = `${request.method} ${request.url}`; // GET /about

  console.log('request', requestString);

  if (requestString === 'GET /about') {
    response.write('This is the about page');
  } else if (requestString === 'GET /products') {
    response.write('Welcome to the products page');
  } else {
    response.write('This is not the page you are looking for');
  }

  response.end();
});

server.listen(port);
