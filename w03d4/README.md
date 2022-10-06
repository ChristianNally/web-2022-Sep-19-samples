# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [ ] Method Override [Stretch]

### Hashing
* one way process
* plaintext password => hashing algorithm => hash sdfhasd7f9asdfnasdfu83
* (plaintext password + salt) => hashing algorithm => hash 
 'potato' + 'asdjkfghjasd86234' => algo => hash

### Encryption
* two way process
* plaintext cookie => encryption algo => encrypted text => sent to the browser
* request with encrypted cookie => decryption algo => plaintext => route handler

                  encrypted cookie
request => server => middleware => middleware => route handler => middleware
                    cookie-session                                cookie-session
                    req.session                   req.session     res.cookie('whateverIWant', encrypted cookie);



https://localhost:3080/login

Monster in the Middle
MitM

public key/private key (asymetric cryptography)
https://www.google.com/


### REST
* REpresentational State Transfer
* naming convention for routes
* routes used to access a resource represent the underlying data structure
* RESTful

R GET /videos/2/comments
R GET /blogposts/5/replies
R GET /images/10/likes
GET /likes


B  GET   /users
R  GET   /users/:id
E  POST  /users/:id
A  POST  /users
D  POST  /users/:id/delete

B  GET    /users
R  GET    /users/:id
E  PATCH  /users/:id
A  POST   /users
D  DELETE /users/:id


PUT - replaces a resource completely
PATCH - replaces a piece of a resource
DELETE - deletes a resource

section
article
div





