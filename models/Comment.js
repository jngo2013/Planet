const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  user: { type: Schema.Types.ObjectId, ref: 'User'},
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;