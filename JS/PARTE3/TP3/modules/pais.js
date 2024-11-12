import mongoose from 'mongoose'

const paisSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    capital: String,
    continent: String,
    flag: String
});

const Pais = mongoose.model('pais', paisSchema);

export default Pais; 


// Mongoose para interactuar con la base de datos.
// Morgan para los middlewares
// Cors  para decirle a la api quienes se pueden conectar (por ejemplo: app.use(morgan(dev)) se conecta el dev)