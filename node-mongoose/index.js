var moongose = require('mongoose');
moongose.Promise = require('bluebird');

var Dishes = require('./models/dishes');

var url = 'mongodb://localhost:27017/conFusion';

var connect = moongose.connect(url, {useNewUrlParser : true});

connect.then(function(db){
    console.log("Connected to Database");

    var newDish = Dishes({
        name: 'Udayaditya',
        description: 'Test'
    });
    
    newDish.save()
        .then(function(dish){
            console.log(dish);
            return Dishes.find({}).exec();
        })

        .then(function(dishes){
            console.log(dishes);
            console.log(db);
            // return db.dropCollection('dishes');
        })

        .then(function(){
            // return db.close();
        })

        .catch(function(err){
            console.log(err);
            
        });
})

.catch(function(err){
    console.log("Error on Connection to DB : \n", err);
    
});
