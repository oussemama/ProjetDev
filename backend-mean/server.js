var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var Produit = require('./api/models/ProduitModel');
var User = require('./api/models/userModel'); 
var Categorie = require('./api/models/categorieModel');
var Commande=require('./api/models/commandeModel')
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/GestProdDB');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var categorieRoute = require('./api/routes/categorieRoutes'); 
var produitRoute = require('./api/routes/produitRoutes'); 
var userRoute = require('./api/routes/userRoutes');
var commandeRoute= require('./api/routes/commandeRoutes');

app.put('/UpdateProduit/:id', (req, res) => {
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
});
app.put('/UpdateUser/:id', (req, res) => {
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
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
app.put('/UpdateCategorie/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    const categorie = new Categorie({
_id: req.body._id,
        code: req.body.code,
        designation: req.body.designation,
   });
   Categorie.findByIdAndUpdate(req.params.id, { $set: categorie }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in categorie Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
app.put('/UpdateCommande/:id', (req, res) => {
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
        else { console.log('Error in Commande Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
categorieRoute(app);
produitRoute(app);
userRoute(app);
commandeRoute(app);

app.listen(port);


console.log('Gestion Produit RESTful API server started on: ' + port);