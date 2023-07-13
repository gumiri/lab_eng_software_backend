const express = require('express');
const router = express.Router();
const mapMateriaPrima = require('../../../model/fortyvinil/mapMateriaPrima.json');


router.get('/', (req,res) =>{
    res.status(200).json({ data: mapMateriaPrima});
})

module.exports = router;