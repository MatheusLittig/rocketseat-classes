const Software = require('../models/Software');
const User = require('../models/User');

module.exports = {

    /*---------LISTANDO SOFTWARES CADASTRADOS POR FEATURE-------------*/
    async index(req, res) {
        const { feature } = req.query;
        
        const softwares = await Software.find({ features: feature});

        return res.json(softwares);
    },

    /* ---------CADASTRANDO NOVO SOFTWARE -----------*/
    async store(req, res) {
        const { filename } = req.file;
        const { name, features, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User does not exists'})
        }

        const software = await Software.create({
            user: user_id,
            thumbnail: filename,
            name, 
            features: features.split(',').map(feature => feature.trim()),
            price
        })

        return res.json(software);
    }
}