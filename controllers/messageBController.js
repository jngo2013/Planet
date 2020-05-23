const { Message } = require('../models')



module.export = {

  addMessage: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'You must provide a text!' });
    }
    try {
      const newMessage = await new Message({ text, user: req.user._id }).save();
      req.user.events.push(newMessage);
      await req.user.save();
      return res.status(200).json(newMessage);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },


}