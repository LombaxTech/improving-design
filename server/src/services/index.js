const user = require('./user/user.service.js');
const bookings = require('./bookings/bookings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(bookings);
};
