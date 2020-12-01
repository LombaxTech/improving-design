const createUserModel = require("../models/user.model");

exports.getTutors = (app) => async (req, res) => {
  const User = createUserModel(app);
  try {
    let tutors = await User.find({ role: 1 });
    res.json(tutors);
  } catch (error) {
    res.json(error);
  }
};
