const { Message } = require('../models')



module.exports = {

  addMessage: async (req, res) => {
    console.log("You hit the messageBoard Post route correctly!", "Line 8!");
    const { text } = req.body;
    console.log(text, "line 10")
    if (!text) {
      return res.status(400).json({ error: 'You must provide a text!' });
    }
    try {
      const newMessage = await new Message({ text, user: req.user._id }).save();
      req.user.messages.push(newMessage);
      await req.user.save();
      return res.status(200).json(newMessage);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },


}