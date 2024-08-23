const mongoose = require('mongoose');

const AdoptedSchema = mongoose.Schema({
    _id:  {type :mongoose.Schema.Types.ObjectId, required:true},
    pet_id: {type :mongoose.Schema.Types.ObjectId, required:true, ref:'pets'},
    user_id:  {type :mongoose.Schema.Types.ObjectId, required:true, ref:'users'}, // hooman_id
    quantity: {type :Number, required:true}
});

module.exports = mongoose.model('adopted',AdoptedSchema);