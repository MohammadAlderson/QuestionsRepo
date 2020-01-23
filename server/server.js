const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const {User} = require('./models/User')

const app = express();

let port = process.env.PORT || '4001';

app.use(bodyParser.json());


app.get('/' , (req, res) => {
    res.send('Welcome Home');
})

app.post('/api/register' , (req, res) => {
    const {userName, password, email} = req.body;
    const user = new User({
        userName,
        password,
        email
    })
    user.save().then(data => {
        res.send({data})
        console.log(data)
    }).catch(err => res.send({err}))
})

app.post('/api/login', (req, res) => {
    const {userName, password} = req.body;
    User.find({userName, password}).then(data => {
        console.log(data);
        res.send({
            statusCode: 200,
            message: 'Success',
            data : {
                id : data[0]._id
            }
        })
    }).catch(err => console.log(err))
});

app.listen(port , () => console.log(`Server is running on ${port}`))