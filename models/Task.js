const { Schema, model } =require('mongoose');

const TaskSchema = new Schema({
  text: { 
  type: String,
  required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event'}
})

module.exports = model ('task', TaskSchema);