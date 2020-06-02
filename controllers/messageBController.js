const { Message } = require("../models");

module.exports = {
  addMessage: async (req, res) => {
    const { text } = req.body;
    const { eventId } = req.params;

    if (!text) {
      return res.status(400).json({ error: "You must provide a text!" });
    }
    try {
      const newMessage = await new Message({
        text,
        user: req.user._id,
        event: eventId,
      }).save();
      var success = await req.user.save();
      const eventMessages = await Message.find({ event: eventId }).populate(
        "user"
      );
      return res.status(200).json(eventMessages);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  getAllMessages: async (req, res) => {
    const { id } = req.params;
    try {
      const eventMessages = await Message.find({ event: id }).populate("user");
      return res.status(200).json(eventMessages);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
