const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findbyIdAndRemove

Todo.findOneAndRemove({_id: '5b1eb566b901847e34f5b316'}).then((todo) => {

});

Todo.findByIdAndRemove('5b1eb566b901847e34f5b316').then((todo) => {
  console.log(todo);
});
