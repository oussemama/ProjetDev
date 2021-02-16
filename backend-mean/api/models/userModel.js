var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var UserSchema = new Schema({

  nom: {
    type:String
    
  },

  prenom:{
    type:String
  },

  mail:{
    type:String
  },

  cin:{
    type:String
  }


});

module.exports = mongoose.model('User', UserSchema);
