const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
let database;

// Connection URL localhost
const URL = "mongodb://localhost:27017";

// Connection URL to Atlas Cluster
//const URL = "mongodb+srv://Milan:<something>@cluster0-da7kk.mongodb.net/test?retryWrites=true&w=majority"

// Database Name
const dbName = "jokesServerDB";

// Create a new MongoClient
const client = new MongoClient(URL, { useNewUrlParser: true });

export const clientConnect = () => {
  client.connect(err => {
    database = client.db(dbName);
    // perform actions on the collection object
  });
};

export const getJokesCollection = () => {
  return database.collection("jokes");
};

export const getUsersCollection = () => {
  return database.collection("users");
};

// Use connect method to connect to the Server
