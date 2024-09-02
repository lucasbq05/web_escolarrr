const { Router } = require('express');
const enrutador = Router();

const UsuarioController = require('../controladores/UsuarioController');

enrutador.get('/Usuario/mostrar', UsuarioController.MostrarUsuario);

enrutador.post('/Usuario/nuevo', UsuarioController.NuevoUsuario);

enrutador.put('/Usuario/modificar', UsuarioController.ModificarUsuario);

module.exports = enrutador;