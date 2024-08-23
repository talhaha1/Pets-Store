const mongoose = require('mongoose');

const AdminSchema= mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required : true ,ref: 'users'},
});

module.exports = mongoose.model('admin',AdminSchema); 