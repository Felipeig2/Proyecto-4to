import mongoose from 'mongoose'

const pjSchema = new mongoose.Schema({
  nombre: {type: String, unique: true},
  raza: String,
  clase: String,
  spect: String,
});

const pj = mongoose.model('pj', pjSchema);

export default pj;