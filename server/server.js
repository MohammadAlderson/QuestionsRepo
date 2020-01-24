const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const {Login} = require('./routes/login')
const {Register} = require('./routes/register')

const app = express();

let port = process.env.PORT || '4001';

app.use(bodyParser.json());

app.use(Login)
app.use(Register)

app.get('/' , (req, res) => {
    res.send('Welcome Home');
})

app.listen(port , () => console.log(`Server is running on ${port}`))