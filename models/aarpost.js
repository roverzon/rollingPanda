const db = require('./db');
const Schema = db.Schema;
const PostSchema = new Schema({
  "title"   : { type : String, required : true },
  "content" : { type : String, required : true },
  "author"  : { type : String, required : true }
});

module.exports = db.model('Post',PostSchema)