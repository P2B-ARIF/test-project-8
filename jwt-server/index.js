const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// test-project-8
// pR1TQ6Ax1Wtk5wc7



const uri = "mongodb+srv://test-project-8:pR1TQ6Ax1Wtk5wc7@cluster0.beqkzcx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const db = client.db('test')

app.get('/users', async (req, res) => {
    const users = await db.collection('users').find().toArray()
    res.send({
        status: 'success',
        data: users,
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
