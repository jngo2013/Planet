const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  
  },
  startTime: {
    type: String,

  },
  finishTime: {
    type: String
  },
  description: {
    type: String
  },
  attending: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
  comments: [ { type: Schema.Types.ObjectId, ref: 'Comment' } ],
  quickTips: {
    type: String,
  },
  directions: {
    type: String,
    default: 'San Francisco',
  },
  itemsNeeded: [{
    type: String
  }],
  pin: {
    type: Number,
  },
  imageUrl: {
    type: String
  },
  task: [{
    type: String
  }],
  userName: [{
    type: String
  }],
  completed: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  host: { type: Schema.Types.ObjectId, ref: 'User' },
  
  
});

const Event = model('Event', EventSchema);

module.exports = Event;