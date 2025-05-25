const { MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function mongo() {
    await client.connect();
    const db = client.db("products");
    const collection = db.collection("items");
    const data = await collection.find({}).toArray();
    console.log(data);
    return collection;
}

// mongo();
module.exports = mongo;

