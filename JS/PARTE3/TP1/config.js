const mongoose = require('mongoose');

const dbconnect = () => {
  console.log("Iniciando conexión a la base de datos...");
  mongoose.set('strictQuery', true);
  mongoose.connect("mongodb://localhost:27017/users_prueba")
    .then(() => {
      console.log("Se ha inicializado el servidor");
      setInterval(() => {
        console.log("Servidor andando");
      }, 15000);
    })
    .catch((err) => {
      console.log('Error de conexión:', err);
    });
};

module.exports = dbconnect;


/*Forma que no anda: /*const mongoose = require('mongoose');

const dbconnect = () => {
  console.log("Iniciando conexión a la base de datos...");
  mongoose.set('strictQuery', true);
  mongoose.connect("mongodb://localhost:27017/users_prueba", {}, (err, res) =>{
    if(!err){
      console.log('Conexión correcta');
    }
    else{
      console.log('Conexión incorrecta');
    }
  })
};

module.exports = dbconnect;*/
 