const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Username : {
        minlength: 3,
        type: String,
        require,
        unique,
        trim: true
    },
    Password : {
        minlength: 8,
        type: String,
        require,
        trim: true
    },
    DisplayName : {
        type: String,
        minlength: 1,
        trim: true,
        default: 'User'
    },
    CreatedDate : {
        type: Number,
        require
    },
    Email : {
        type: Email,
        trim: true
    },
    Picture : {
        type: String,
        trim: true
    },
    AnsCount : {
        type: Number
    },
    CorrectAnsCount: {
        type: Number
    },
    WrongAnsCount: {
        type: Number
    }
})

const User = mongoose.model('User', UserSchema);