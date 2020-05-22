const { Event } = require('../models');

module.exports = {
  getEvents: async (req, res) => {
    try {
      const events = await Event.find();
      if (!events) {
        return res.status(200).json({ error: 'No events found' });
      }
      return res.json(events);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
