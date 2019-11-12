const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const users = require("./users/usersDB.json");
const jokes = require("./jokes.json");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "jokesServerDB";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  const collection = db.collection("jokes");

  collection.insertMany(jokes, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted 3 documents??!!");
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("testingCollection");
  // Find some documents
  collection.find({ a: 3 }).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};

const updateDocument = function(db, callback) {
  const collection = db.collection("testingCollection");

  collection.updateOne({ a: 2 }, { $set: { b: 2 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
};

const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("testingCollection");
  // Delete document where a is 3
  collection.deleteOne({ a: 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
};

const indexCollection = function(db, callback) {
  db.collection("testingCollection").createIndex({ b: 1 }, null, function(
    err,
    results
  ) {
    console.log(results);
    callback();
  });
};
