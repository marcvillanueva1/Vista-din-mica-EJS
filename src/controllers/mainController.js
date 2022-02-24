// Acá nos falta nuestra fuente de datos
let platos = [
    {
    nombre: "Carpaccio fresco",
    detalle: "Entrada Carpaccio de salmón con cítricos",
    precio: 65.50, //En USD
    detalleExtendido: "Mousse de arroz con leche y aroma de azahar",
    img: "/images/Carpaccio-de-salmon.jpg"
    },
    {
    nombre: "Risotto de berenjena",
    detalle: "Risotto de berenjena y queso de cabra",
    precio: 47.00, //En USD
    detalleExtendido: "",
    img: "/images/Risotto-berenjena-queso-cabra.jpg"
    }
    ,{
    nombre: "Mousse de arroz",
    detalle: "Mousse de arroz con leche y aroma de azahar",
    precio: 27.50, //En USD
    detalleExtendido: "Mousse de arroz con leche y aroma de azahar",
    img: "/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
    nombre: "Espárragos blancos",
    detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio: 37.50, //En USD
    detalleExtendido: "",
    img: "/images/esparragos.png"
    }
]
// Acá nos falta un objeto literal con las acciones para cada ruta
const controlador = {
    index: (req, res)=>{
        res.render("index",{"platos":platos});
    },
    menu: (req, res)=>{
        let idPlato = req.params.id;
        if(platos[idPlato].detalleExtendido == "")
            platos[idPlato].detalleExtendido = "Plato tipico"
        res.render("detalleMenu", {"plato": platos[idPlato]});
    }
}
// Acá exportamos el resultado

module.exports = controlador;