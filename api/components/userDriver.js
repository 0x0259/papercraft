var ObjectID = require('mongodb').ObjectID;

function UserDriver(db) {
  if (!(this instanceof UserDriver)) {
    return new UserDriver(db);
  }

  this.db = db;
  this.collection = 'players';
}

UserDriver.prototype.getCollection = function getCollection(collectionName, callback) {
  this.db.collection(collectionName, function (error, results) {
    if (error) {
      callback(error, null);
    }
    else {
      callback(null, results);
    }
  });
};

UserDriver.prototype.findAll = function findAll(collectionName, callback) {
  this.getCollection(collectionName, function (error, requested_collection) {
    if (error) {
      callback(error, null);
    }
    else {
      requested_collection.find().toArray(function (error, results) {
        if (error) {
          callback(error, null);
        }
        else {
          callback(null, results);
        }
      });
    }
  });
};

UserDriver.prototype.signin = function signin(email, password, callback) {
  this.getCollection(this.collection, function (error, requested_collection) {
    if (error) {
      callback(error, null);
    }
    else {
      requested_collection.findOne({'email':email,'password':password}, function (error, document) {
        if (error) {
          callback(error, null);
        }
        else {
          if (document !== null) {
            callback(null, {
              alias: document.alias,
              name: document.name,
              email: document.email
            });
          }

          callback(null, null);
        }
      })
    }
  });
};

module.exports = UserDriver;