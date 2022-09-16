const checkEmailExists = "SELECT s FROM customer s WHERE s.email = $1"

const loginCustomer = "SELECT * FROM customer WHERE email = $1"

const getCustomers = "SELECT * FROM customer";
const getCustomerById = "SELECT * FROM customer WHERE id = $1"
const addCustomer = "INSERT INTO customer (firstname, lastname, email, address, password) VALUES ($1, $2, $3, $4, $5)"
const updateCustomer = "UPDATE customer SET firstname = $1 WHERE id = $2"
const removeCustomer = "DELETE FROM customer WHERE id = $1"

const getAnimalsOfCustomer = "SELECT * FROM animal WHERE customer_id = $1"

const getRessource = (ressource) => {
    return `SELECT * FROM ${ressource}`
}

module.exports = {
    checkEmailExists,
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    removeCustomer,
    getAnimalsOfCustomer,
    loginCustomer,
    getRessource,
}