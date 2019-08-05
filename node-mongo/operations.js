var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback){
    var coll = db.collection(collection);

    /**
     * With Callback
     */
    coll.insert(document, function(err, result) {
        assert.equal(err, null);
        console.log('Result', result.result.n + "documents into the collection " + collection);
        callback(result);
    });

    /**
     * With Promise
     */

    //  return coll.insert(document);
};

exports.findDocuments = function(db, collection, callback){
    var coll = db.collection(collection);

    /**
     * With Callback
     */
    coll.find({}).toArray(function(err, result) {
        assert.equal(err, null);
        callback(result);
    });

    /**
     * With Promises
     */
    // return coll.find({}).toArray();

};

exports.removeDocument = function(db, document, collection, callback){
    var coll = db.collection(collection);

    /**
     * With Callback
     */
    coll.deleteOne(document, function(err, result){
        assert.equal(err, null);
        console.log('Removed the document', document);
        callback(result);
    });

    /**
     * With Promises
     */
    
    // return  coll.deleteOne(document);


};

exports.updateDocument = function(db, document, update,  collection, callback){
    var coll = db.collection(collection);

    /**
     * With Callback 
     */

     coll.updateOne(document,{ $set: update},null,function(err, result){
        assert.equal(err, null);
        console.log('Updated the document', document);
        callback(result);
    });

    /**
     * With Promises
     */

    return coll.updateOne(document);
    
};
