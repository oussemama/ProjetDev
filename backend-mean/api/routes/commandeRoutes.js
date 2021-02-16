var cors = require('cors')
var ObjectId = require('mongoose').Types.ObjectId;
module.exports = function(app) {

    var commande = require('../controllers/commandeController');
  app.use(cors())

    // commande Routes
    app.route('/commande')
      .get(commande.list_all_commande)
      .post(commande.create_a_commande);

      app.route('/UpdateCommande/:id')
      .put(commande.update_a_commande)
  
    app.route('/commande/:commandeId')
      .get(commande.read_a_commande)
      .put(commande.update_a_commande)
      .delete(commande.delete_a_commande);

      app.route('/commande/code/:commandeCode')
      .get(commande.read_a_commande_by_code)

  };