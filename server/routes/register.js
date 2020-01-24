const express = require('express');
const {User} = require('./../models/User')
const app = express();

const Register = app.post('/api/register' , async (req, res) => {
    const {userName, password, email} = req.body;

    try {
        let userNameExists = await User.find({userName});

        let userHasEmail = await User.find({email});
    
        if(userNameExists.length > 0) {
            res.send({
                statusCode: -3,
                message: 'This username already exists! try another one',
            })
            return;
        } else if(userHasEmail.length > 0) {
            res.send({
                statusCode: -4,
                message: 'Try another Email',
            })
            return;
        } else {
            const user = new User({
                userName,
                password,
                email
            })

            let userAdded = await user.save();

            res.send({
                statusCode: 200,
                message: 'Success',
                data : {
                    id : userAdded._id
                }
            })
        }
    } catch(e) {
        console.log(e)
        res.send(e)
    }
    
})

module.exports = {Register};