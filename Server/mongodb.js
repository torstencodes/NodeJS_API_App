
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:testuser@cluster0.k2q0q.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
