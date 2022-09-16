const pool = require('../database/db-local.js')
const healthRecordsQueries = require('../queries/healthRecords.js')

//HealthRecords
const getHealthRecords = (req, res) => {
    pool.query(healthRecordsQueries.getHealthRecords, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const getHealthRecordById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(healthRecordsQueries.getHealthRecordById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const addHealthRecord = (req, res) => {
    const {animal_id, visit_id} = req.body

    pool.query(healthRecordsQueries.checkDupeHealthRecord, [animal_id], (error, result) => {
        if (result.rows.length) {
            res.send('Health record for that animal already exists.')
        } else {
            pool.query(healthRecordsQueries.addHealthRecord, [animal_id, visit_id], (error, result) => {
                if (error) throw error
                res.status(201).send('HealthRecord created successfully.')
            })
        }
    })
}

const updateHealthRecord = (req, res) => {
    const id = parseInt(req.params.id)
    const {firstname} = req.body
    pool.query(healthRecordsQueries.getHealthRecordById, [id], (error, result) => {
        const noHealthRecordFound = !result.rows.length
        if (noHealthRecordFound) return res.send("HealthRecord does not exist in the database.")

        pool.query(healthRecordsQueries.updateHealthRecord, [firstname, id], (error, result) => {
            if (error) throw error
            res.status(200).json("HealthRecord updated successfully.")
        })
    })
}

const removeHealthRecord = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(healthRecordsQueries.getHealthRecordById, [id], (error, result) => {
        const noHealthRecordFound = !result.rows.length
        if (noHealthRecordFound) return res.send("HealthRecord does not exist in the database.")

        pool.query(healthRecordsQueries.removeHealthRecord, [id], (error, result) => {
            if (error) throw error
            res.status(200).json("HealthRecord removed successfully.")
        })
    })
}

module.exports = {
    getHealthRecords,
    getHealthRecordById,
    addHealthRecord,
    updateHealthRecord,
    removeHealthRecord,
}