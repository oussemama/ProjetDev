var mongoose = require('mongoose'),
Produit = mongoose.model('Produit');
const bodyParser = require("body-parser");

exports.list_all_produit = function(req, res) {
  Produit.find({}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};




exports.create_a_produit = function(req, res) {
  var new_produit = new Produit(req.body);
  new_produit.save(function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.read_a_produit = function(req, res) {
  Produit.findById(req.params.produitId, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};

exports.read_a_produit_by_code = function(req, res) {
  Produit.find({"code": req.params.produitCode}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.update_a_produit = function(req, res) 
{
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  const produit = new Produit({
_id: req.body._id,
      code: req.body.code,
libelle: req.body.libelle,
      prix: req.body.prix,
      categories: req.body.categories,
 });
 Produit.findByIdAndUpdate(req.params.id, { $set: produit }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Produit Update :' + JSON.stringify(err, undefined, 2)); }
  });
};


exports.delete_a_produit = function(req, res) {


  Produit.remove({
    _id: req.params.produitId
  }, function(err, produit) {
    if (err)
      res.send(err);
    res.json({ message: 'Produit successfully deleted' });
  });
};

