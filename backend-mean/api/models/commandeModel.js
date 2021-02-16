var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var CommandeSchema = new Schema({
  beneficaire:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },

  date_c:{
    type:Date
  },

  date_l:{
    type:Date
  },
  produit_comm:{
    type:Schema.Types.ObjectId,
    ref:'Produit'
  },
  quant:{
    type:String
  }
});

module.exports = mongoose.model('Commande', CommandeSchema);
