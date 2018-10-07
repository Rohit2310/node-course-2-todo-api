//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

/*var user = {name: 'Rohit', age:28};
var {name} = user;
console.log(name);
return false;*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect MongoDB Server');
    }
    else{
        console.log('Connected to MongoDB Server');
        const db = client.db('TodoApp');
    
        /*db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => {
            if(err){
                return console.log('Unable o insert todo', err);
            }
    
            console.log(JSON.stringify(result.ops, undefined, 2));
        });*/

        /*db.collection('Users').insertOne({
            _id: 123,
            name: 'Rohit',
            age: 28,
            location: 'Mandor road, jodhpur, rajasthan'
        }, (err, result) => {
            if(err){
                return console.log('Unable to insert User', err);
            }
            else{
                console.log(JSON.stringify(result.ops, undefined, 2));

                console.log(result.ops[0]._id.getTimestamp());
            }
        });*/
    
        client.close();
        //db.close();
    }
});