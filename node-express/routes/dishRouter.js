var express = require('express');
var bodyParser = require('body-parser');

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')

.all( function(req, res, next){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get( function(req, res, next){
    res.end('Will send all the dishes to you!');
})

.post( function(req, res, next){
    res.end('will add the dish' + req.body.name + 'with the description' + req.body.description);
})

.put( function(req, res, next){
    res.end('will add the dish' + req.body.name + 'with the description' + req.body.description);
})

.delete( function(req, res, next){
    res.end('will add the dish' + req.body.name + 'with the description' + req.body.description);
})

.get( function(req, res, next){
    var dishId = req.params.dishId;

    res.end('Will send all the dishes to you!');
})

.post( function(req, res, next){
    var dishId = req.params.dishId;

    res.end('will add the dish' + req.body.name + 'with the description' + req.body.description);
})

.put( function(req, res, next){
    var dishId = req.params.dishId;

    res.end('will add the dish' + req.body.name + 'with the description' + req.body.description);
})

.delete( function(req, res, next){
    var dishId = req.params.dishId;
    
    res.end('will add the dish' + req.body.name + 'with the description' + req.body.description);
});


module.exports = dishRouter;



