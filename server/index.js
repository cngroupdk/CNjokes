const { GraphQLServer, express } = require("graphql-yoga");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const resolvers = require("./resolvers");

mongoose.set("useCreateIndex", true);
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});

require("./services/jokesCron")();
require("./services/categoriesCron")();

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like main.js and main.css files
  server.express.use(express.static("client/build"));

  // Express will server up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  server.express.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.start(PORT, () => console.log(`Server is running on ${PORT}`));
