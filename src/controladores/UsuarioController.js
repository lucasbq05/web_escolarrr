//importamos el modelo
const Usuario = require('../models/Usuario');

//creamos el nuevo controlador
const UsuarioController = {};

UsuarioController.MostrarUsuario = async (req, res) => {
 const listado = await Usuario.find(); //treaemos todos los datos del modelo
 res.send(listado); //lo enviamossssssss
}

UsuarioController.ModificarUsuario = async (req, res) => {
    return 0;
   } 
   

UsuarioController.NuevoUsuario= async (req, res) => {
    // Para obtener un dato en particular
    const { nombre, apellido, correo_electronico, password } = req.body;
    console.log(req.body);

    // Si existen los 4 datos
    if ( nombre && apellido && correo_electronico && password ) {
        // Creamos un nuevo item
        const Nuevousuario = new Usuario ({nombre, apellido, correo_electronico, password});
        console.log(this.Nuevousuario);


        try {
            // Guardamos el nuevo item 
            let r = await this.Nuevousuario.save();

            // Verificamos si se creó el recurso
            if (r){
                res.status(200).json({msg: 'Usuario creado'});
            } else {
                res.status(500).json({error: 'No se pudo crear el usuario'});
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({error: e});
        }
        
    }
    else {
        res.status(500).json({error: 'faltan datos'});
    }

    
};

UsuarioController.EliminarItem = async (req, res) => {
    const id = req.params.id;

    if (id){
        console.log(id);
        
        try{
            await Usuario.findByIdAndDelete(id);
        }
        catch (err) { 
            console.log("Error en el delete: "+error);
            res.status(500).json({error: err});
        }

        res.send("ID ELIMINADO");
    } else{
        res.send("Falta ID");
    }
};


module.exports = UsuarioController;