var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

/*var newUser = new User({
    email: 'rohit@gmail.com'
});

newUser.save().then((docs) => {
    console.log(docs);
}, (err) => {
    console.log(err);
});*/

module.exports = {User};