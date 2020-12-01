// Initializes the `bookings` service on path `/bookings`
const { Bookings } = require('./bookings.class');
const createModel = require('../../models/bookings.model');
const hooks = require('./bookings.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bookings', new Bookings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bookings');

  service.hooks(hooks);
};
