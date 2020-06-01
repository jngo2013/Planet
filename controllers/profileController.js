const { User, eventId } = require ('../models');


module.exports = {
  getUserInfo: async (req, res) => {
    try {
      const getUserName = await User.findById(  req.user._id )

        return res.status(200).json(getUserName)
    } catch (e) {
      console.log(req.body);
        return res.status(418).json({ e })
    }
  }

}