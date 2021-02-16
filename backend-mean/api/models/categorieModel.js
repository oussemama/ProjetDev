var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorieSchema = new Schema({
  code: {
    type: String,
    
  },

  designation:{
    type:String
  }

});

module.exports = mongoose.model('Categorie', CategorieSchema);
