const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,

    //gravando o id do user que adicionou o software
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    //gravando o software adiquirido do user que adicionou o software
    software: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Software'
    }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);