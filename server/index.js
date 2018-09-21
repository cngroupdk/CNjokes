const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const resolvers = require('./resolvers');
const { GraphQLServer } = require('graphql-yoga');
// const bodyParser = require('body-parser');
// require('./models/Joke');
// require('./models/Category');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
);

// generate new express aplication
const app = express();
/*
this is depracated part of the app that uses "REST API"
app.use(bodyParser.json());
require('./routes/jokeRoutes')(app);
require('./routes/categoryRoutes')(app);
require('./services/jokesCron')();
require('./services/categoriesCron')();
*/

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

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
