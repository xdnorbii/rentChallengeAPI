'use strict';
module.exports = function(app) {
  var rents = require('../controllers/rentController');

  // todoList Routes
  app.route('/rents')
    .get(rents.rents_all)

  app.route('/rents/:rentId')
    .get(rents.rents_by_rent_id)

    
  app.route('/rents/host/:hostId')
  .get(rents.rents_by_host_id)

  app.route('/user')
  .post(rents.user_by_id)

  app.route('/host/:hostId')
  .get(rents.host_by_id)
};