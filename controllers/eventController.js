
const { User, Event } = require('../models/index');

module.exports = {
  
  joinEvent: async (req, res) => {
    const { pin } = req.body
    try {
      const findEventToJoin = await Event.find({ pin })
    
      if(!findEventToJoin.length) {
        return res.status(401).json({ error: 'No event found with that pin'})
      }
      return res.json(findEventToJoin)

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
      const newEvent = await new Event({ title, description, date, pin, host: req.user._id }).save();
      req.user.todos.push(newEvent)
      await req.user.save()
      return res.status(200).json(newEvent)
    } catch (e) {
      return res.status(403).json ({ e })
    }
    // they're creating a pin and creating an event name
  }

}
