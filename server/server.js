const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

const app = express();

let port = process.env.PORT || '4001';

app.use(bodyParser.json());


app.get('/' , (req, res) => {
    res.send('Welcome Home');
})


app.listen(port , () => console.log(`Server is running on ${port}`))