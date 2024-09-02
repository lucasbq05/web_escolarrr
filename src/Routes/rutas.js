const { Router } = require('express');
const enrutador = Router();
const Noticias = require('../models/Noticias.js');
enrutador.get('/prueba', (req, res) => { // RUTAS 
    res.send("Esta es una prueba");
    
});


//traer la lista de post
enrutador.get('/listarTodo', async (req, res) => { // RUTAS 
    try {
        const lista = await Noticias.find().lean();
        console.log(JSON.stringify(lista));
        res.status(200).json(lista);

    } catch(e){
        res.status(500).json({error: e});
    }
    
});


module.exports = enrutador;