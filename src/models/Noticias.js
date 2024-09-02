const {Schema, model} = require('mongoose');

const NoticiasSchema = new Schema({
    Titulo: {
        type: String,
        required: true
    }, 
    texto: {
        type:String,
        required: true
    },
   }, {
        timestamps: true
   });

   // Modelo creado a partir del esquema
module.exports = model('Noticias', NoticiasSchema, 'Noticias');