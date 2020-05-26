const { Message } = require('../models')



module.exports = {

  addMessage: async (req, res) => {
    console.log("You hit the messageBoard Post route correctly!", "Line 8!");
    const { text } = req.body;
    // console.log(req, "line 10")
    if (!text) {
      return res.status(400).json({ error: 'You must provide a text!' });
    }
    try {
      console.log("1")
      const newMessage = await new Message({ text, user: req.user._id }).save();
      console.log (newMessage)
      console.log("2")
      req.user.messages.push(newMessage);
      console.log("3")
      var success = await req.user.save();
      console.log(success)
      console.log("4")
      return res.status(200).json(newMessage);
    } catch (e) {
      console.log("6")
      return res.status(403).json({ e });
    }
  },


}