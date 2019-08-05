var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dboper = require('./operations');

var url = 'mongodb://localhost:27017';

/**
 * With Promises
 */

// MongoClient.connect(url)
// .then(function (client) { // <- db as first argument
//   console.log(client)
// })
// .catch(function (err) {

// });

mongoClient.connect(url, function (err, client)  {
    assert.equal(err, null);
    console.log('Connected to MongoDb Server');

    var db = client.db('conFusion');
    var collection = db.collection('dishes');

    /**
     * Functional DB Operations
     */


    dboper.insertDocument(
        db,
        {
            "name": "Uthappizza", 
            "description": "test"
        },
        "dishes",
        function(result){
            console.log("Inserted Documented : \n");
            console.log(result.ops);
            dboper.findDocuments(db, "dishes", function(docs){
                console.log("Found Documents: \n", docs);
                dboper.updateDocument(db,{name : "Uthappizza"}, {description: 'updated test'},"dishes", function(result){
                    console.log("Updated Document: \n", result.result);
                    dboper.findDocuments(db, "dishes", function(docs){
                        console.log("Found updated Documents: \n", docs);
                        db.dropCollection('dishes', function(result){
                            console.log('Dropped Collcetion : \n', result);
                            client.close();
                        });
                    });
                });
            });
            
        });


/**
 * Direction Calling DB Operations
 */
    // collection.insertOne({
    //     "name": "Uthappizza", 
    //     "description": "test"
    // }, function (err, result){
    //     assert.equal(err, null);
    //     console.log("After Insert: \n");
    //     console.log(result.ops);
    //     collection.find({}).toArray(function(err, docs){
    //         assert.equal(err, null);
    //         console.log("Found: \n");
    //         console.log(docs);
    //         if(docs){
    //             db.dropCollection("conFusion", function(err, result){
    //                 assert.equal(err, null);
    
    //                 client.close();
    //             });
    //         }
    //     });
        
    // });




});