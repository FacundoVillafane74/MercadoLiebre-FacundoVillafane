const path = require('path');

const mainController = {
    home: (req, res) => {
        const ruta = path.join(__dirname, '../views/home.html');
        res.sendFile(ruta);
    },
};

module.exports = mainController;