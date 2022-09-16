const pool = require('../database/db-local.js')
const visitQueries = require('../queries/visits')

//Visits
const getVisits = (req, res) => {
    pool.query(visitQueries.getVisits, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const getVisitById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(visitQueries.getVisitById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const getVisitsOfGivenAnimal = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(visitQueries.getVisitsOfGivenAnimal, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const addVisit = (req, res) => {
    const {vaccine, animal_id, date} = req.body

    pool.query(visitQueries.addVisit, [vaccine, animal_id, date], (error, result) => {
        if (error) throw error
        else {res.status(201).send('Visit created successfully.')}
    })

}

const updateVisit = (req, res) => {
    const id = parseInt(req.params.id)
    const {firstname} = req.body
    pool.query(visitQueries.getVisitById, [id], (error, result) => {
        const noVisitFound = !result.rows.length
        if (noVisitFound) return res.send("Visit does not exist in the database.")

        pool.query(visitQueries.updateVisit, [firstname, id], (error, result) => {
            if (error) throw error
            res.status(200).json("Visit updated successfully.")
        })
    })
}

const removeVisit = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(visitQueries.getVisitById, [id], (error, result) => {
        const noVisitFound = !result.rows.length
        if (noVisitFound) return res.send("Visit does not exist in the database.")

        pool.query(visitQueries.removeVisit, [id], (error, result) => {
            if (error) throw error
            res.status(200).json("Visit removed successfully.")
        })
    })
}

module.exports = {
    getVisits,
    getVisitById,
    addVisit,
    updateVisit,
    removeVisit,
    getVisitsOfGivenAnimal
}