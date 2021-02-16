var cors = require('cors')

module.exports = function(app) {

    var categorie = require('../controllers/categorieController');
  app.use(cors())

    // categorie Routes
    app.route('/categorie')
      .get(categorie.list_all_categorie)
      .post(categorie.create_a_categorie);
  
  
    app.route('/categorie/:categorieId')
      .get(categorie.read_a_categorie)
      .put(categorie.update_a_categorie)
      .delete(categorie.delete_a_categorie);
  };