//imagem, nome, cargo, idade

const mongoose = require('mongoose');

const SoftwareSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    features: [String],
    price: Number,

    //gravando o id do user que adicionou o software
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true
    },
});

SoftwareSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Software', SoftwareSchema);