const express = require('express');
const morgan = require('morgan');

const port = 3000;
const app = express();

const bubbleTeas = [
  {
    id: 'abcd',
    name: 'Taro',
    flavour: 'Taro root',
    boba: true,
    ice: 90
  },
  {
    id: 'efgh',
    name: 'Durian',
    flavour: 'great taste; bad smell',
    boba: false,
    ice: 50
  },
];

// middleware
app.use(morgan('dev'));
app.use(express.static('stuff-for-the-front-end'));
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// routes

// GET /bubbleteas
app.get('/bubbleteas', (req, res) => {
  res.json(bubbleTeas);
});

// POST /bubbleteas
app.post('/bubbleteas', (req, res) => {
  const name = req.body.name;
  const flavour = req.body.flavour;

  const newBubbleTea = {
    id: Math.random().toString(36).substring(2, 6),
    name,
    flavour
  };

  bubbleTeas.push(newBubbleTea);
  console.log(bubbleTeas);

  res.json(newBubbleTea);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
