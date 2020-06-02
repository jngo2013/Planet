const { Task } = require("../models");

module.exports = {
  addTask: async (req, res) => {
    const { taskText } = req.body;
    const { eventId } = req.params;
    if (!taskText) {
      return res.status(400).json({ error: "You must provide a task!" });
    }
    try {
      const newTask = await new Task({
        text: taskText,
        user: req.user._id,
        event: eventId,
      }).save();
      return res.status(200).json(newTask);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getAllTasks: async (req, res) => {
    const { eventId } = req.params;
    try {
      const eventTasks = await Task.find({ event: eventId }).populate("user");
      return res.status(200).json(eventTasks);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
