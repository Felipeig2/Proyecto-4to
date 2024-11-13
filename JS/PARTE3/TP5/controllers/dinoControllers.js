import dino from "../models/dinoModels";

const getAllDinos = (req, res) => {
  dino.find()
    .then(dinos => res.status(200).json(dinos))
    .catch(err => res.status(404).json({ error: err.message }));
}

const getOneDino = (req, res) => {
  dino.findOne({id: req.params.id})
    .then(dinos => res.status(200).json(dinos))
}

const deleteOneDino = (req, res) => {
dino.deleteOne({id: req.params.id})
.then(dinos => res.status(200).json(dinos))
.catch(err => res.status(404).json({ error: err.message }));
}

const putOneDino =  (req, res) => {
  dino.findOneAndUpdate({id: req.params.id}, req.body, {new: true})
  .then(dinos => res.status(200).json(dinos))
  }

const postOneDino =  (req, res) => {
  const newDino = new dino(req.body)
    dino.save()
    .then(dinos => res.status(200).json(dinos))
  }

  const controller = {
    getAllDinos,
    getOneDino,
    deleteOneDino,
    putOneDino,
    postOneDino
  }

  export default controller;