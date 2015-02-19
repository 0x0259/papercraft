var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var UserDriver = require('./components/userDriver');
var mongoHost = 'localhost';
var mongoPort = 27017;
var mongoDatabase = 'papercraft';
var userDriver;

var express = require('express');
var bodyParser = require('body-parser');
var expressPort = process.env.PORT || 3000;
var app = express();
var router = express.Router();
var jsonParser = bodyParser.json();

var mongoClient = new MongoClient(new Server(mongoHost, mongoPort));
mongoClient.open(function (error, client) {
  if (!client) {
    console.error('Failed to connect to MongoDB');
    process.exit(1);
  }

  var db = client.db(mongoDatabase);
  userDriver = UserDriver(db);
});

router.get('/', function(request, response) {
  response.json({ message: 'Papercraft!' });
});

router.post('/users/signin', jsonParser, function (request, response) {
  var params = request.body;
  userDriver.signin(params.email, params.password, function (error, result) {
    if (error) {
      response.status(400).send(error);
    }
    else {
      if (result !== null) {
        response.status(200).send(result);
      }

      response.status(404).send();
    }
  });
});

app.use('/v1', router);

app.listen(expressPort);
console.log('Papercraft running on port ' + expressPort);
