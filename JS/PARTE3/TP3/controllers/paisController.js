import Pais from '../modules/pais.js'

const allPaises = (req, res) => {
    Pais.find()
        .then(paises => res.status(200).json(paises));
        if(!Pais) res.status(204).json({msj: 'Not found'});
};

const newPais = (req, res) => {
    const newPais = new Pais(req.body);
    newPais.save()
    .then(pais => res.status(200).json(pais));
};

const controller = {
    allPaises,
    newPais
};

export default controller;