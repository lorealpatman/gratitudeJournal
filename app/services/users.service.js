const user = require("../models/user");
const mongodb = require("../mongodb.connection");
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

module.exports = {
  getAll: getAll,
  getById: getById,
  post: post,
  put: put,
  delete: _delete
};

///////GET////////
function getAll() {
  return conn
    .db()
    .collection("users")
    .find()
    .toArray()
    .then(users => {
      for (let i = 0; i < users.length; i++) {
        let user = users[i];
        user._id = user._id.toString(); // convert ObjectId back to string
      }
      return users;
    });
}

// function getById(id) {
//   return conn
//     .db()
//     .collection("users")
//     .findOne({ _id: new ObjectId(id) })
//     .then(user => {
//       user._id = user._id.toString(); // convert ObjectId back to string
//       return user;
//     });
// }

////POST/////
function post(user) {
  return conn
    .db()
    .collection("users")
    .insertOne(user)
    .then(result => result.insertedId.toString());
}

////PUT/////
function put(id, user) {
  // convert string id used outside of MongoDB into ObjectId needed by MongoDB
  user._id = new ObjectId(user._id);

  return conn
    .db()
    .collection("users")
    .replaceOne({ _id: new ObjectId(id) }, user)
    .then(result => Promise.resolve()); // "return" nothing
}

/////DELETE/////
function _delete(id) {
  return conn
    .db()
    .collection("users")
    .deleteOne({ _id: new ObjectId(id) })
    .then(result => Promise.resolve()); // "return" nothing
}
