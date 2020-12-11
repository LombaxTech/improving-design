const createUserModel = require("../models/user.model");
const createBookingModel = require("../models/bookings.model");
const createChatModel = require("../models/chat.model");

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

exports.getChats = (app) => async (req, res) => {
  const { userId } = req.params;
  const Chat = createChatModel(app);

  let chats = await Chat.find({
    members: {
      $elemMatch: {
        $in: userId,
      },
    },
  }).populate("members");
  // .populate({
  //   path: "messages",
  //   populate: {
  //     path: "sender",
  //   },
  // });

  res.json(chats);
};

exports.getOneChat = (app) => async (req, res) => {
  const Chat = createChatModel(app);
  const { chatId } = req.params;
  try {
    let chat = await Chat.findOne({ chatId }).populate({
      path: "messages",
      populate: {
        path: "sender",
        model: "user",
        // select: "profilePictureId _id",
      },
    });
    res.json(chat);
  } catch (error) {
    res.json(error);
  }
};

exports.sendMessage = (app) => async (req, res) => {
  const Chat = createChatModel(app);
  const { text, sender, chatId } = req.body;

  const message = { text, sender };

  try {
    const chat = await Chat.findOne({ chatId });
    chat.messages.push(message);

    let result = await chat.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
