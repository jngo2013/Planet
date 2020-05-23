const { Schema, model } =require('mongoose');

const MessageBSchema = new Schema({
  text: { 
  type: String,
  required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event'}
})

module.exports = model ('MessageB', MessageBSchema);