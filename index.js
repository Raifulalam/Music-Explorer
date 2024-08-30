const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);//, { useNewUrlParser: true, useUnifiedTopology: true }

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('musicDb'); // Replace 'testdb' with your database name
        const collection = database.collection('musiccollection'); // Replace 'testcollection' with your collection name


        const result = await collection.insertOne({ name: 'John Doe', age: 30 });
        console.log('Document inserted:', result.insertedId);


        const documents = await collection.find().toArray();
        console.log('Documents:', documents);

    } finally {

        await client.close();
    }
}

main().catch(console.error);
