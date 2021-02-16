var mongoose = require('mongoose'),
Categorie = mongoose.model('Categorie');

exports.list_all_categorie = function(req, res) {
  Categorie.find({}, function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};

exports.create_a_categorie = function(req, res) {
  var new_categorie = new Categorie(req.body);
  new_categorie.save(function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};


exports.read_a_categorie = function(req, res) {
  Categorie.findById(req.params.categorieId, function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};


exports.update_a_categorie = function(req, res) {
  Categorie.findOneAndUpdate({_id: req.params.categorieId}, req.body, {new: true}, function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};


exports.delete_a_categorie = function(req, res) {


  Categorie.remove({
    _id: req.params.categorieId
  }, function(err, categorie) {
    if (err)
      res.send(err);
    res.json({ message: 'Categorie successfully deleted' });
  });
};

