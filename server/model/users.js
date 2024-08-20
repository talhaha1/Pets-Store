const mongoose = require('mongoose');

const UsersSchema= mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required : true},
    name: { type: String, required : true},
    email: { type: String, required : true},
    password: { type: String, required : true},
});

module.exports = mongoose.model('users',UsersSchema);