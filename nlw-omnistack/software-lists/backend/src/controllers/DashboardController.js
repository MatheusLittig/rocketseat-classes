const Software = require('../models/Software');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const softwares = await Software.find({ user: user_id});

        return res.json(softwares);
    }
}