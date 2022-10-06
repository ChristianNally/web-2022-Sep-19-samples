const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const port = 3080;
const app = express();

const users = {
  'abcd': {
    id: 'abcd',
    email: 'jstamos@mail.com',
    password: '$2a$10$7UD8SECZiHCTtmf6WL9iY.G76/yFIpTTHTCatV73FUARV0gd8LIsu'
  },
  'efgh': {
    id: 'efgh',
    email: 'rickroll@gotcha.com',
    password: 'secret'
  }
};

const findUserByEmail = (email) => {
  for (const userId in users) {
    const userFromDb = users[userId];

    if (userFromDb.email === email) {
      // we found our user!!
      return userFromDb;
    }
  }

  return null;
};

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 6);
};

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'whateverIWant',
  keys: ['ouit9haefhaiosdhjfo;asjdf']
}));

app.use((req, res, next) => {
  console.log('I am above the next');
  next();

  console.log('I am below the next');
});

// GET /login
app.get('/login', (req, res) => {
  console.log('inside the login function');
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  console.log('inside the login function');
  // console.log('req.body', req.body);

  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are NOT defined
  if (!email || !password) {
    // return res.status(400).send('<html><body><a href="/login">Login</a></body></html>');
    // res.status(400).redirect('/login');
    res.status(400).send('please include email AND password');
  }

  const user = findUserByEmail(email);

  // check if we found a user
  if (!user) {
    return res.status(400).send('no user with that email found');
  }

  // check if the provided password is correct
  const result = bcrypt.compareSync(password, user.password);

  if (!result) {
  // if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).send('wrong password');
  }

  // log the user in (aka set a cookie)
  // res.cookie('userId', user.id);
  req.session.userId = user.id;

  // post-redirect-get
  res.redirect('/protected');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are NOT defined
  if (!email || !password) {
    return res.status(400).send('please include email AND password');
  }

  // check if the email is already in use
  const userFromDb = findUserByEmail(email);

  // if email is duplicated, respond with error message
  if (userFromDb) {
    return res.status(400).send('email is already in use');
  }

  // create a new user object
  const id = generateUniqueId();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = {
    id,
    email,
    password: hash
  };

  // update the users object with our new user
  users[id] = user;
  console.log(users);

  // do we log the user in (set a cookie) OR do we redirect the user to /login
  // res.cookie('userId', user.id);
  req.session.userId = user.id;

  res.redirect('/protected');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the user's cookie
  // res.clearCookie('userId');
  req.session = null;

  // send the user somewhere
  res.redirect('/login');
});

// GET /protected
app.get('/protected', (req, res) => {
  // const userId = req.cookies.userId;
  const userId = req.session.userId;

  if (!userId) {
    // return res.status(401).send('you are not authorized to be here');
    return res.redirect('/login');
  }

  if (!users[userId]) {
    return res.status(401).send('please send a valid user id as a cookie');
  }

  const templateVars = {
    user: users[userId]
  };

  res.render('protected', templateVars);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
