const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..', '..', 'uploads'),
        
        //config o arquivo na pasta
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            //deixando o nome do arquivo identico ao upado pelo cliente + data atual + extensão
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    })
}