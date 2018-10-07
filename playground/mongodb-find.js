//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect MongoDB Server');
    }
    else{
        console.log('Connected to MongoDB Server');
        const db = client.db('TodoApp');
    
        /*db.collection('Todos').find({completed: false}).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch', err);
        });*/

        /*db.collection('Todos').find({_id: new ObjectID('5bb9b283efaf922234a59298')}).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch', err);
        });*/

        /*db.collection('Todos').find().count().then((count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch', err);
        });*/

        db.collection('Users').find({name: 'Rohit'}).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch', err);
        });
            
        client.close();
        //db.close();
    }
});