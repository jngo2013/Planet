
const { User, Event } = require('../models/index');

module.exports = {
  
  joinEvent: async (req, res) => {
    const { pin } = req.body

    try {
      const findEventToJoin = await Event.find({ pin })
      const joinedEventId = findEventToJoin._id
      if(!findEventToJoin.length) {
        return res.status(401).json({ error: 'No event found with that pin'})
      }
      const joinAttending = await Event.findByIdAndUpdate(joinedEventId, { $push: { attending: req.user._id }})

      return res.json(joinAttending)

    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  createEvent: async (req, res) => {
    const { title, description, date, pin } = req.body;
    if(!title || !description || !date || !pin) {
      return res.status(400).json({ error: 'You must input a title, description, date, and pin!'})
    }
    try {
      const existingPin = await Event.findOne({ pin });
      if(existingPin) { return res.status(403).json({ error: 'Pin Already Exists'})}

      const newEvent = await new Event({ title, description, date, pin, host: req.user._id }).save();
      
      const newEventId = newEvent._id

// pushing the user's specific ID into the attending field 
      const updateAttending = await Event.findByIdAndUpdate(newEventId, { $push: { attending: req.user._id }})
      
      // await req.user.save()
      return res.status(200).json(updateAttending)
    } catch (e) {
      return res.status(403).json ({ e })
    }
    // they're creating a pin and creating an event name
  },

  getEvent: async (req, res) => {
    console.log("you made it to getEvent Function")
    console.log(req.user._id)
    try {
      const events = await Event.find({ attending: req.user._id })
      console.log(events)
      return res.json(events)

    } catch (e) {
      return res.status(403).json({ e })
    }
  },
  deleteEvent: async (req, res) => {
    console.log("you're deleting me!?")
    console.log(req.user._id)
    const { eventId } = req.params;
    console.log(eventId)
    try {
      const eventToDelete = await Event.findById(eventId)
      console.log(eventToDelete)
      if(!eventToDelete) {
        return res.status(401).json({ error: 'That event had already been deleted'});
      }
      if(req.user._id.toString() !== eventToDelete.host.toString()) {
        // considering checking (if this is true maybe we just remove you from attendance array instead of deleting the event)
        return res.status(401).json({ error: "You cannot delete an event you are not hosting"})
      }

      const deletedEvent = await Event.findByIdAndDelete(eventId)
      return res.json(deletedEvent)
    } catch (e) {
      return res.status(403).json({ e })
    }
  },

}
