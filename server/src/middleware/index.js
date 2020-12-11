const {
  getTutors,
  getBookingsForUser,
  getChats,
  getOneChat,
  sendMessage,
} = require("./controller");
const createBookingModel = require("../models/bookings.model");

module.exports = function (app) {
  app.get("/custom-tutors", getTutors(app));
  app.get("/custom-bookings/:userId", getBookingsForUser(app));
  app.get("/custom-chats/:userId", getChats(app));
  app.get("/custom-chat/:chatId", getOneChat(app));
  app.post("/message", sendMessage(app));
};
