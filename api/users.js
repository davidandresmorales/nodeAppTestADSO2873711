const db = require('../models');
const {Router} = require('express'); // Llamamos al metodo Router de express
// Creamos el routerpara poder usar los verbos HTTP
const router = Router(); // Llamamos al metodo Router de express

// req => request => En request llegan los datos del body
// res => response => Se envian los datos al cliente
router.get("/", (req, res) => {
    res.send({Title:'Hello ADSO!'});
});

module.exports = router;


router.post('/new', async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.status(400).send('Usuario no pudo ser creado');
    }
});