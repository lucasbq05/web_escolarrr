const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const UsuarioSchema = new Schema({
    nombre: {
        type: String,
         required: true
    },
    apellido: {
        type:String,
        required: true
    },
    correo_electronico: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
   }, {
        timestamps: true
   });
   
// Creamos función que encripta contraseña
UsuarioSchema.methods.encriptarPass = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
    
// Función para verificar si la contraseña es correcta
UsuarioSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// Modelo creado a partir del esquema
module.exports = model('Usuario', UsuarioSchema, 'Usuario');