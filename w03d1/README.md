# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

### Servers
* server - has data a client wants/needs
* client - wants data

### HTTP
* IP - internet protocol (street address)
* Port - apartment number of the process we are looking for
* 65,535
  * 3000 - 9000 (devs)
  * 80 - HTTP
  * 443 - https
  * 5432 - postgres

* TCP - transport control protocol


                      Move: up
  You ded
client <==== tcp ====> server


* HTTP - HyperText Transfer Protocol
* request/response cycle

### Request
* two parts: verb/action and a path/url/resource
* verb: describes what you want to do
  * GET - retrieve something
  * POST - send something (created/edited/deleted)
* path: describes what you want to do it to
  * http://www.google.com /search
  * http://localhost:3000 /about

* body: may or may not have contents

### Response
* must have a status code
  * 404 - resource not found
  * 200 - everything is okay
  * 500 - internal server error
  * 201 - resource created

  * 1xx - basic routing
  * 2xx - things are going well
  * 3xx - redirection
  * 4xx - bad request
  * 5xx - server errors

* may or may not have a body

                        Response
client <==== tcp/ ====> server


```js
cosnt net = require('net');
const port = 3000;

const server = net.createServer();

server.on('connection', (connection) => {
  console.log('someone has connected');

  connection.write('Move: up');
});

server.listen(port);
```

```js
const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log('someone has made a request to the server');

  response.write('welcome to our website');
});

server.listen(port);
```

### Middleware
* is a function that runs between receiving the request and sending back the response
* parsing incoming data 

                                                      request
client <=====> server => middleware => middleware => route handler
                        cookie-parser  body-parser
                        req.cookies     req.body

```js
const incomingString = 'message=hello+world'

const incomingObj = {message: 'hello world'};
```















