var cors = require('cors')
var ObjectId = require('mongoose').Types.ObjectId;
module.exports = function(app) {

    var produit = require('../controllers/produitController');
  app.use(cors())

    // produit Routes
    app.route('/produit')
      .get(produit.list_all_produit)
      .post(produit.create_a_produit);

      app.route('/UpdateProduit/:id')
      .put(produit.update_a_produit)
  
    app.route('/produit/:produitId')
      .get(produit.read_a_produit)
      .put(produit.update_a_produit)
      .delete(produit.delete_a_produit);

      app.route('/produit/code/:produitCode')
      .get(produit.read_a_produit_by_code)

  };