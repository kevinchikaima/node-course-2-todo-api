const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b1b0877cbe82621bc08c11e11';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e));

var userID = '5b1ac0a5e08cfe52b44fefdb';

if (!ObjectID.isValid(userID)) {
  return console.log('USer ID not valid');
}

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User:', JSON.stringify(user,undefined,2));
});
