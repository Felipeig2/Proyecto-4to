import mongoose from 'mongoose'

const dinoSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  eat: String
})
const dino = mongoose.model('dino', dinoSchema);

export default dino;