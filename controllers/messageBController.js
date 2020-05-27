const { Message, User } = require('../models')



module.exports = {

  addMessage: async (req, res) => {
    console.log("You hit the messageBoard Post route correctly!", "Line 8!");
    const { text } = req.body;
    // console.log(req, "line 10")
    if (!text) {
      return res.status(400).json({ error: 'You must provide a text!' });
    }
    try {
      const newMessage = await new Message({ text, user: req.user._id });
      newMessage.save();
      console.log (newMessage)
      req.user.messages.push(newMessage);
      var success = await req.user.save();
      console.log(success, "hello this is line 20")
      return res.status(200).json(newMessage);
    } catch (e) {
      console.log("6")
      return res.status(403).json({ e });
    }
  },

  getAllMessages: async (req, res) => {
    console.log(req.query);
    const { messages } = req.query;
    try {
      const eventMessages = await User.find({ messages }, 'email');
      return res.status(200).json(eventMessages);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
}