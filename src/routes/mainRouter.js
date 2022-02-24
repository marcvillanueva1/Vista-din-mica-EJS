// Acá nos falta express y el router

const express = require ("express");
const router = express.Router();

// Aća nos falta traer el controller

const controlador = require("../controllers/mainController");

// Acá definimos las rutas

router.get("/", controlador.index);
router.get("/detalle/:id", controlador.menu);


// Acá exportamos el resultado

module.exports = router;