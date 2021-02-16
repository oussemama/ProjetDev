var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.list_all_user = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};




exports.create_a_user = function(req, res) {
  var new_user= new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user_by_code = function(req, res) {
  User.find({"code": req.params.userCode}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) 
{
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  const user = new User({
_id: req.body._id,
      nom: req.body.nom,
      prenom: req.body.prenom,
      mail: req.body.mail,
      cin: req.body.cin,
 });
 User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Produit Update :' + JSON.stringify(err, undefined, 2)); }
  });
};


exports.delete_a_user = function(req, res) {


  user.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

