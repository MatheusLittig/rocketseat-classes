const Purchase = require('../models/Purchase');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { software_id } = req.params;
        const { date } = req.body;

        const purchase = await Purchase.create({
            user: user_id,
            software: software_id,
            date,
        });

        await purchase.populate('software').populate('user').execPopulate();

        return res.json(purchase);
    }
}