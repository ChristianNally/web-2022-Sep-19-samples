const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  console.log('inside the blogpost router');

  next();
});

// GET /blogposts/
router.get('/', (req, res) => {
  db.query('SELECT * FROM posts;')
    .then((response) => {
      // const blogposts = response.rows;
      // res.json(blogposts);

      res.render('blogposts', { id: process.env.ID });
    });
});

// GET /blogposts/:id/
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
    .then((response) => {
      const blogpost = response.rows[0];
      res.json(blogpost);
    });
});


module.exports = router;
