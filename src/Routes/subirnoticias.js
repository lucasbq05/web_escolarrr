const { Router } = require('express');
const enrutador = Router();

const NoticiasController = require('../controladores/NoticiasController.js');

enrutador.get('/noticia/mostrar', NoticiasController.MostrarNoticias);

module.exports = enrutador;

