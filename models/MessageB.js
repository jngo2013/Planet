const { Schema, model } =require('mongoose');

const MessageBSchema = new Schema({
  text: { 
  type: String,
  required: true,
  },
  date: {
    type: Date,
    default: new Date()
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event'}
})

module.exports = model ('MessageB', MessageBSchema);