import pj from "../models/pjModel.js";


const getAllpjs = (req, res) => {
  pj.find()
    .then(pjs => res.status(200).json(pjs))
}

const getPjById = (req, res) => {
  pj.findOne({id: req.params.id})
    .then(pj => res.status(201).json(pj))
};


const getPjByName = (req, res) => {
  pj.findOne({nombre: { "$regex": req.params.name, "$options": "i" } })
  .then(pj => res.status(200).json(pj))
};


const deletePj = (req, res) => {
  pj.deleteOne({id: req.params.id})
    .then(() => res.status(200).json({ msg: 'Eliminadito rico' }))
    .catch(err => res.status(404).json({ error: err.message }));
};


const newPj = (req, res) => {
  const newPj = new pj(req.body);
  newPj.save()
    .then(newPj => res.status(200).json(newPj))
}

const UpdatePj = (req, res) => {
    pj.findOneAndUpdate({id: req.params.id}, req.body, { new: true })
    .then(pj => res.status(200).json(pj))
  };


const controller = {
  getAllpjs,
  getPjById,
  getPjByName,
  deletePj,
  newPj,
  UpdatePj
}

export default controller;