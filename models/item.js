const mongoose = require("mongoose");

const supremeSchema = new mongoose.Schema({
  name: {type: String},
  type: {type: String},
  resellers: [{
    username:{type: String},
    hostSite:{type: String},
    price:{type: Number},
  }]

});

const Item = mongoose.model('Item', supremeSchema);

module.exports = Item;
