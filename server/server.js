// Library...
var express = require('express');
var bodyParser = require('body-parser');

// Local...
var {mongoose} = require('./db/mongoose')

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// Express Obj...
var app = express();

// Middleware...
app.use(bodyParser.json());

// Post Request
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (Err) => {
        res.status(400).send(Err);
    });
});

// Get Request...
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(200).send(e);
    });
});


// Server Listner...
app.listen(3000, () => {
    console.log('Part 3000');
});

module.exports = {app};