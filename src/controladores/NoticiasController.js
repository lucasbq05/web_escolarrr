//importamos el modelo
const noticias = require('../models/Noticias.js');

//creamos el nuevo controlador
const NoticiasController = {};

NoticiasController.MostrarNoticias = async (req, res) => {
 const listado = await noticias.find(); //treaemos todos los datos del modelo
 res.send(listado); //lo enviamossssssss
}

module.exports = NoticiasController;