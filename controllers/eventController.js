const { User, Event } = require('../models/index');

module.exports = {
  
  joinEvent: async (req, res) => {
    console.log('im hit')
    console.log(req.body)
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
  }

}