//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect MongoDB Server');
    }
    else{
        console.log('Connected to MongoDB Server');
        const db = client.db('TodoApp');

        // deleteMany
        /*db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
            console.log(result);
        });*/

        // deleteOne
        /*db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
            console.log(result);
        });*/

        // findOne and delete
        /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
            console.log(result);
        });*/

        // deleteMany
        /*db.collection('Users').deleteMany({name: "Ravi"}).then((result) => {
            console.log(result);
        });*/

        // findOne and delete
        db.collection('Users').findOneAndDelete({_id: new ObjectID("5bba4f774e2d58e328dd98b2")}).then((result) => {
            console.log(result);
        });
            
        client.close();
        //db.close();
    }
});