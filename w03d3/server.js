const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languages = require('./languages.json');

const port = 3080;
const app = express();

const users = {
  'abcd': {
    id: 'abcd',
    email: 'jstamos@mail.com',
    password: '1234'
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
app.use(cookieParser()); // req, res, next
app.use(express.urlencoded({ extended: false }));

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // console.log('req.body', req.body);

  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are NOT defined
  if (!email || !password) {
    return res.status(400).send('please include email AND password');
  }

  // look up the user based on their email
  // let user = null;
  // for (const userId in users) {
  //   const userFromDb = users[userId];
  //   if (userFromDb.email === email) {
  //     // we found our user!!
  //     user = userFromDb;
  //   }
  // }

  const user = findUserByEmail(email);

  // check if we found a user
  if (!user) {
    return res.status(400).send('no user with that email found');
  }

  // check if the provided password is correct
  if (user.password !== password) {
    return res.status(400).send('wrong password');
  }

  // log the user in (aka set a cookie)
  res.cookie('userId', user.id);

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

  const user = {
    id,
    email,
    password
  };

  // update the users object with our new user
  users[id] = user;
  console.log(users);

  // do we log the user (set a cookie) OR do we redirect the user to /login
  res.cookie('userId', user.id);

  res.redirect('/protected');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the user's cookie
  res.clearCookie('userId');

  // send the user somewhere
  res.redirect('/home');
});

// GET /protected
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId

  if (!userId) {
    return res.status(401).send('you are not authorized to be here');
  }

  if (!users[userId]) {
    return res.status(401).send('please send a valid user id as a cookie');
  }

  const templateVars = {
    user: users[userId]
  };

  res.render('protected', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  // res.cookie('languageSelection', 'fr');
  
  const languageSelection = req.cookies.languageSelection || 'ko';

  const templateVars = {
    heading: languages.aboutHeadings[languageSelection],
    body: languages.aboutBodies[languageSelection]
  };

  res.render('about', templateVars); // render(templateName, locals)
});

// GET /home
app.get('/home', (req, res) => {
  // console.log('req.cookies:', req.cookies);

  const languageSelection = req.cookies.languageSelection || 'ko';

  const templateVars = {
    heading: languages.homeHeadings[languageSelection],
    body: languages.homeBodies[languageSelection]
  };

  res.render('home', templateVars);
});

// GET /languages/:language
app.get('/languages/:language', (req, res) => {
  const language = req.params.language;

  res.cookie('languageSelection', language);

  res.redirect('/home');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
