// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

// MongoDB connection URI and client
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('testdb'); // Replace 'testdb' with your database name
        const collection = database.collection('testcollection');
        // Perform CRUD operations here
        // For example, insert a document
        const result = await collection.insertOne({ name: 'John Doe', age: 30 });
        console.log('Document inserted:', result.insertedId);
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}

connectToDatabase();

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example route to get documents
app.get('/api/music', async (req, res) => {
    try {
        const database = client.db('musicDb');
        const collection = database.collection('musiccollection');
        const documents = await collection.find().toArray();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch documents' });
    }
});

// Example route to add a document
// app.post('/api/music', async (req, res) => {
//     try {
//         const { name, age } = req.body; // Ensure that 'name' and 'age' are included in the request body
//         const database = client.db('musicDb');
//         const collection = database.collection('musiccollection');
//         const result = await collection.insertOne({ name, age });
//         res.status(201).json({ insertedId: result.insertedId });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to insert document' });
//     }
// });

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
