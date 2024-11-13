import mongoose from 'mongoose'

const pjSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  nombre: String,
  raza: String,
  clase: String,
  spect: String
});

const pj = mongoose.model('pj', pjSchema);

export default pj;