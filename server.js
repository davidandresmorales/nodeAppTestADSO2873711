const express = require('express'); // Se llama la dependecian del framework
const morgan = require('morgan'); // Se llama la dependencia de morgan para el log de las peticiones
const bodyParser = require('body-parser'); // Se llama la dependencia de body-parser para el parseo de los datos
const app = express(); // Se crea la instancia de express

if (process.env.NODE_ENV !== 'production') {
    // Cargamos las variables de entorno solo si no estamos en producción
    require('dotenv').config(); // Se carga el archivo .env
    
}

app.set('port', process.env.PORT || 4000); // Se establece el puerto de la app

// permite recibir datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // permite recibir solicitudes en Json
app.use(morgan('common')); // Se establece el formato de log de las peticiones

// Routes
// Rutas de usuarios para la V1 del API
app.use('/api/v1/users', require('./api/v1/user.routes')); // Ruta para users

// // Rutas del API
// app.get('/', (req, res) => {
//     // rq = request => esla petición del usuario
//     // res = response => es la respuesta del servidor al usuario
//     res.send({
//         'status': 200,
//         'message': 'Prueba de Api exitosa'
//     })
// });
// app.get('/saludos', (req, res) => {
//     res.send({
//         'status': 200,
//         'message': 'Hello ADSO 2873711!'
//     })
// });
// app.post('/newUserTest', (req, res) => {
//     // console.log(req);
//     /*  console.log(req.body);
//      const name = req.body.name;
//      const email = req.body.email;
//      const telefono = req.body.telefono;
//      const direccion = req.body.direccion;
//      const empresa = req.body.empresa; */
//     const { name, email, telefono, direccion, empresa } = req.body;


//     console.log(`Nombre: ${name}`);
//     console.log(`Email: ${email}`);
//     console.log(`Telefono: ${telefono}`);
//     console.log(`Direccion: ${direccion}`);
//     console.log(`Empresa: ${empresa}`);
//     res.send({
//         "status": 201,
//         "message": "Usuario creado con éxito",
//     });

// })

// se inicializa el servidor

app.listen(app.get('port'), () => {
    console.log(`El server esta corrinedo en el puerto ${app.get('port')}`);
})