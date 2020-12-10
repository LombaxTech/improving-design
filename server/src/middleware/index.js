const { getTutors, getBookingsForUser } = require("./controller");
const createBookingModel = require("../models/bookings.model");

module.exports = function (app) {
  app.get("/custom-tutors", getTutors(app));
  app.get("/custom-bookings/:userId", getBookingsForUser(app));
};
