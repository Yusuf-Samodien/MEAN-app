const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {type: String, requierd: true},
  content: {type: String, required: true}
});

module.exports = mongoose.model('Post', postSchema); //creates a constructor function
