var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

/*var newTodo = new Todo({
    text: 'Cook-dinner'
});

newTodo.save().then((docs) => {
    console.log(docs);
}, (e) => {
    console.log('Unable to save todo');
});*/

/*var newTodo = new Todo({
    text: 'Feed the car',
    completed: false,
    completedAt: 123
});

newTodo.save().then((docs) => {
    console.log(docs);
}, (Err) => {
    console.log(Err);
});*/

module.exports = {Todo};