// Módulos
const express = require('express');
const app = express();
const router = require ("./routes/mainRouter");
const path = require ("path");
// Acá falta uno... 😇
app.use(router);

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set("view engine", "ejs");
app.set("views", "./src/views")
// Rutas
app.use("/", router);
// Acá falta el archivo de rutas y después las vistas de EJS
app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});


app.listen(3500, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})



