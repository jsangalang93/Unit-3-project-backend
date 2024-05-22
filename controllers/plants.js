const express = require ('express');
const router = express.Router();
const Plant = require('../models/plant.js')

//posts a new plant to the  API

router.post('/', (req, res) => {
    try {
        const createdPlant = Plant.create(req.body)
        res.status(201).json(createdPlant)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get index of plants

router.get('/', async (req, res) => {
    try {
        const foundPlants = await Plant.find({})
        res.status(200).json(foundPlants)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

// search by plant id

router.get('/:plantId', async (req, res) => {
    try {
        const foundPlant = await Plant.findById(req.params.plantId)
        res.status(200).json(foundPlant)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

// delete a plant by id

router.delete('/:plantId', async (req, res) => { 
    try { 
        const deletedPlant = await Plant.findByIdAndDelete(req.params.plantId)
        res.status(200).json(deletedPlant)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

// update a plant by id

router.put('/:plantId', async (req, res) => { 
    try { 
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.plantId, req.body, {new:true})
        res.status(200).json(updatedPlant)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

module.exports = router;