//index, show, store, update, destroy
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        //verificando se o email já está cadastrado
        let user = await User.findOne({ email });

        if (!user) {
            //criando o usuárip com o e-mail inserido
            user = await User.create({ email });
        } 

        return res.json(user);
    }
}