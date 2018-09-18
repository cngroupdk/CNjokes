const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Joke');
require('./models/Category');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
);

// generate new express aplication
const app = express();
app.use(bodyParser.json());

require('./routes/jokeRoutes')(app);
require('./routes/categoryRoutes')(app);
require('./services/jokesCron')();
require('./services/categoriesCron')();

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like main.js and main.css files
  app.use(express.static('client/build'));

  // Express will server up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App is listening on port', PORT);
});
