var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017';

mongoClient.connect(url, function (err, client)  {
    assert.equal(err, null);
    console.log('Connected to MongoDb Server');

    var db = client.db('conFusion');
    var collection = db.collection('conFusion');

    collection.insertOne({
        "name": "Uthappizza", 
        "description": "test"
    }, function (err, result){
        assert.equal(err, null);
        console.log("After Insert: \n");
        console.log(result.ops);
        collection.find({}).toArray(function(err, docs){
            assert.equal(err, null);
            console.log("Found: \n");
            console.log(docs);
            if(docs){
                db.dropCollection("conFusion", function(err, result){
                    assert.equal(err, null);
    
                    client.close();
                });
            }
        });
        
    });
});