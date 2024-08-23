const mongoose = require('mongoose');

const PetsSchema= mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required : true},
    name: { type: String, required : true},
    type: { type: String, required : true},
    breed: { type: String, required : true},
    price: { type: Number, required : true},
    quantity: { type: Number, required : true}
});

module.exports = mongoose.model('Pets',PetsSchema);