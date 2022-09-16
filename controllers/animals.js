const pool = require('../database/db-local.js')
const animalQueries = require('../queries/animals.js')

//Animals
const getAnimals = (req, res) => {
    pool.query(animalQueries.getAnimals, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const getAnimalById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(animalQueries.getAnimalById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const addAnimal = (req, res) => {
    const {name, race, customer_id, specie, birthdate} = req.body

    pool.query(animalQueries.checkDupeAnimal, [name, customer_id], (error, result) => {
        if (result.rows.length) {
            res.send('Animal already registered.')
        } else {
            pool.query(animalQueries.addAnimal, [name, race, customer_id, specie, birthdate], (error, result) => {
                if (error) throw error
                res.status(201).send('Animal created successfully.')
            })
        }

    })
}

const updateAnimal = (req, res) => {
    const id = parseInt(req.params.id)
    const {firstname} = req.body
    pool.query(animalQueries.getAnimalById, [id], (error, result) => {
        const noAnimalFound = !result.rows.length
        if (noAnimalFound) return res.send("Animal does not exist in the database.")

        pool.query(animalQueries.updateAnimal, [firstname, id], (error, result) => {
            if (error) throw error
            res.status(200).json("Animal updated successfully.")
        })
    })
}

const removeAnimal = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(animalQueries.getAnimalById, [id], (error, result) => {
        const noAnimalFound = !result.rows.length
        if (noAnimalFound) return res.send("Animal does not exist in the database.")

        pool.query(animalQueries.removeAnimal, [id], (error, result) => {
            if (error) throw error
            res.status(200).json("Animal removed successfully.")
        })
    })
}

module.exports = {
    getAnimals,
    getAnimalById,
    addAnimal,
    updateAnimal,
    removeAnimal,
}