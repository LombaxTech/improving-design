const createUserModel = require("../models/user.model");
const createBookingModel = require("../models/bookings.model");

exports.getTutors = (app) => async (req, res) => {
  const User = createUserModel(app);
  try {
    let tutors = await User.find({ role: 1 });
    res.json(tutors);
  } catch (error) {
    res.json(error);
  }
};

exports.getBookingsForUser = (app) => async (req, res) => {
  const { userId } = req.params;
  // return res.json(userId);
  const Bookings = createBookingModel(app);
  try {
    let result = await Bookings.find({
      $or: [{ tutor: userId }, { student: userId }],
    }).populate("tutor student");
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
