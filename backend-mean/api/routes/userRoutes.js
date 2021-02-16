var cors = require('cors')
var ObjectId = require('mongoose').Types.ObjectId;
module.exports = function(app) {

    var user = require('../controllers/userController');
  app.use(cors())

    // user Routes
    app.route('/user')
      .get(user.list_all_user)
      .post(user.create_a_user);

      app.route('/UpdateUser/:id')
      .put(user.update_a_user)
  
    app.route('/user/:userId')
      .get(user.read_a_user)
      .put(user.update_a_user)
      .delete(user.delete_a_user);

      app.route('/user/code/:userCode')
      .get(user.read_a_user_by_code)

  };