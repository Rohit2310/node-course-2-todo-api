const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5bbe482ea822712848b472d0s';

if(!ObjectId.isValid(id)){
	return console.log('Id not valid');
}

Todo.find({
	_id: id
}).then((todos) => {
	if(todos.length == 0){
		return console.log('Id not found');
	}
	console.log('Todos', todos);
}).catch((e) => {
	console.log(e);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo', todo);
}).catch((e) => {
	console.log(e);
});

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo by id', todo);
}).catch((e) => {
	console.log(e);
});*/

var id = '5bbceee3eb3bf532d85d7738';

if(!ObjectId.isValid(id)){
	return console.log('Id not valid');
}


User.findById(id).then((user) => {
	if(!user){
		return console.log('Id not found');
	}
	console.log('User by id', user);
}).catch((e) => {
	console.log(e);
});