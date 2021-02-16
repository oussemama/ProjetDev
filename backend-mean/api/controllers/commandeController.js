var mongoose = require('mongoose'),
Commande = mongoose.model('Commande');

exports.list_all_commande = function(req, res) {
    Commande.find({}, function(err, commande) {
    if (err)
      res.send(err);
    res.json(commande);
  });
};




exports.create_a_commande = function(req, res) {
  var new_commande= new Commande(req.body);
  new_commande.save(function(err, commande) {
    if (err)
      res.send(err);
    res.json(commande);
  });
};


exports.read_a_commande = function(req, res) {
    Commande.findById(req.params.commandeId, function(err, commande) {
    if (err)
      res.send(err);
    res.json(commande);
  });
};

exports.read_a_commande_by_code = function(req, res) {
    Commande.find({"code": req.params.commandeCode}, function(err, commande) {
    if (err)
      res.send(err);
    res.json(commande);
  });
};


exports.update_a_commande = function(req, res) 
{
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  const commande = new Commande({
_id: req.body._id,
beneficaire: req.body.beneficaire,
date_c: req.body.date_c,
date_l: req.body.date_l,
      quant: req.body.quant,
 });
 Commande.findByIdAndUpdate(req.params.id, { $set: commande }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Produit Update :' + JSON.stringify(err, undefined, 2)); }
  });
};


exports.delete_a_commande = function(req, res) {


    Commande.remove({
    _id: req.params.commandeId
  }, function(err, commande) {
    if (err)
      res.send(err);
    res.json({ message: 'commande successfully deleted' });
  });
};

