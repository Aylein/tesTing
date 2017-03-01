var uuid = require("node-uuid");
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/local';

const mongo = () => {
    return new Promise(resolve => {
        MongoClient.connect(url, (err, db) => {
            resolve(db);
        });
    });
};

// mongo().then(db => {
//     let col = db.collection("User");
//     col.insert([{name: "aylein", age: 30}, {name: "shan", age: 20}, {name: "sou", age: 17}]);
//     db.close();
// });

const getUser = (rule) => new Promise(resolve => {
    mongo().then(db => {
        let col = db.collection("User");
        col.find(rule).toArray().then(res => { resolve(res); });
        db.close();
    });
});

console.log(uuid());

getUser({age: {$lt: 25}}).then(res => { console.log(res); });