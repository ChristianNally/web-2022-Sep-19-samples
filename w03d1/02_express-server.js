const express = require('express');
const morgan = require('morgan');
const port = 3000;

const app = express();

// middleware
// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('inside the middleware');
  req.secretKey = 'hello world';

  // if (!loggedIn) {
  //   res.redirect('/login');
  // }

  next(); // I'm finished, call the next middleware/route handler in line please
});

// GET /about
app.get('/about', (request, response) => {
  console.log('secretKey', request.secretKey);
  response.send('This is the about page');
});

// GET /home
app.get('/home', (req, res) => {
  // res.send()
  res.json({ message: 'welcome' });
  // res.sendFile()
  // res.render() // `${spotOne}: ${spotTwo}`
  // res.redirect();
});

app.listen(port);
