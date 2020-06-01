const { Task } =require('../models')

module.exports = {

addTask: async (req, res) => {
  console.log("You hit the task Post route correctly!", "Line 8!");
  const { text } = req.body;
  const { eventId } = req.params;
  console.log(req.params);
  // console.log(req, "line 10")
  if (!text) {
    return res.status(400).json({ error: 'You must provide a task!' });
  }
  try {
    console.log(eventId);
    const newTask = await new Task({ text, user: req.user._id, event: eventId }).save();
    console.log (newTask)
    // req.user.Tasks.push(newTask);
    var success = await req.user.save();
    const eventTasks = await Task.find({ event: eventId }).populate("user");
    console.log(eventTasks)
    return res.status(200).json(eventTasks);
  } catch (e) {
    console.log("6")
    return res.status(403).json({ e });
  }
},
getAllTasks: async (req, res) => {
  console.log(req.query);
  const { id } = req.params;
  const { taskText } = req.query;
  try {
    const eventTasks = await Task.find({ event: id }).populate("user");
    console.log(eventTasks)
    return res.status(200).json(eventTasks);
  } catch (e) {
    return res.status(403).json({ e });
  }
},
}