const { getTutors } = require("./controller");

module.exports = function (app) {
  app.get("/custom-tutors", getTutors(app));
};
