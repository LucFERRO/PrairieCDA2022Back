const pool = require('../database/db-local.js')
const customersQueries = require('../queries/customers.js')

// const getRessource = (req, res) => {
//     const ressource = req.params.entity
//     pool.query(queries.getRessource(ressource), (error, result) => {
//         if (error) throw error;
//         console.log(req.params.entity)
//         res.status(200).json(result.rows)
//     })
// }

// const addRessource = (req, res) => {
//     const ressource = req.params.entity
//     const {firstname, lastname, email, address} = req.body

//     pool.query(queries.checkEmailExists, [email], (error, result) => {
//         if (result.rows.length) {
//             res.send('Email already exists.')
//         }

//         pool.query(queries.addCustomer, [firstname, lastname, email, address], (error, result) => {
//             if (error) throw error
//             res.status(201).send('Customer created successfully.')
//         })
//     })
// }


//Customers
const loginCustomer = (req, res) => {
    const {email, password} = req.body
    pool.query(customersQueries.loginCustomer, [email, password], (error, result) => {
        if (result.rows.length) {
            res.send('Invalid email or password.')
        } else {
            res.json(result.rows)
        }
    })
}

const getCustomers = (req, res) => {
    pool.query(customersQueries.getCustomers, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const getCustomerById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(customersQueries.getCustomerById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const addCustomer = (req, res) => {
    const {firstname, lastname, email, address, password} = req.body

    pool.query(customersQueries.checkEmailExists, [email], (error, result) => {
        if (result.rows.length) {
            res.send('Email already exists.')
        } else {
            pool.query(customersQueries.addCustomer, [firstname, lastname, email, address, password], (error, result) => {
                if (error) throw error
                res.status(201).send('Customer created successfully.')
            })
        }

    })
}

const updateCustomer = (req, res) => {
    const id = parseInt(req.params.id)
    const {firstname} = req.body
    pool.query(customersQueries.getCustomerById, [id], (error, result) => {
        const noCustomerFound = !result.rows.length
        if (noCustomerFound) return res.send("Customer does not exist in the database.")

        pool.query(customersQueries.updateCustomer, [firstname, id], (error, result) => {
            if (error) throw error
            res.status(200).json("Customer updated successfully.")
        })
    })
}

const removeCustomer = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(customersQueries.getCustomerById, [id], (error, result) => {
        const noCustomerFound = !result.rows.length
        if (noCustomerFound) return res.send("Customer does not exist in the database.")

        pool.query(customersQueries.removeCustomer, [id], (error, result) => {
            if (error) throw error
            res.status(200).json("Customer removed successfully.")
        })
    })
}

const getAnimalsOfCustomer = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(customersQueries.getAnimalsOfCustomer, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

module.exports = {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    removeCustomer,
    getAnimalsOfCustomer,
    loginCustomer,
    // getRessource,
}