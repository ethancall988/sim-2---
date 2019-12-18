require('dotenv').config();
const massive = require('massive');
const express = require('express');
const {SERVER_PORT, DB_CONNECTION_URI} = process.env;
const ctrl = require('./controller');
const app = express();

app.use(express.json())

app.get('/houses', ctrl.getHouses)
app.post('/houses', ctrl.createHouse)
app.delete('/houses/:id', ctrl.deleteHouse)

massive(DB_CONNECTION_URI).then(databaseConnection => {
    app.set('db', databaseConnection);
    console.log('Database connected');
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is this working??`));
});


