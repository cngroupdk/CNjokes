const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
let database;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'jokesServerDB';

// Create a new MongoClient
const client = new MongoClient(url);

export const clientConnect = () => {
  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Database successfully connected to server");
  
    database = client.db(dbName);
  });
}

export const getJokesCollection = () => {
  return database.collection('jokes')
}

export const getUsersCollection = () => {
  return database.collection('users');
}

// Use connect method to connect to the Server
