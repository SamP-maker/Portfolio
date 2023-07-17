const { MongoClient} = require('mongodb')
const express = require('express')
const app = express()


let dbConnection
let db


MongoClient.connect('mongodb://localhost:27017/fusionedbs')
  .then((client) => {
    db = client.db();

    app.listen(8080, () => {
      console.log('App listening on port 8080');
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
  });

app.use(express.json()); // Enable JSON request body parsing

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const newUser = {
    username: username,
    email: email,
    password: password,
    oauthType: 'local',
    createdAt: new Date(),
  };

  db.collection('User_Table')
    .insertOne(newUser)
    .then(() => {
      console.log('User inserted successfully');
      res.status(200).json({ message: 'User inserted successfully' });
    })
    .catch((error) => {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Error inserting user' });
    });
});