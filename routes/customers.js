const { Router } = require('express')
const customerController = require('../controllers/customers.js')

const router = Router();

// Customers

/**
 * @swagger
 * tags:
 *      name: Customers
 *      description: Manage customers
 */


/**
 * @swagger
 * /api/customers:
 *  get:
 *      tags: [Customers]
 *      description: Request all customers
 *      summary: 
 */
 router.post('/login', customerController.loginCustomer)

/**
 * @swagger
 * /api/customers:
 *  get:
 *      tags: [Customers]
 *      description: Request all customers
 *      summary: 
 */
router.get('/', customerController.getCustomers)

/**
 * @swagger
 * /api/customers:
 *  post:
 *      tags: [Customers]
 *      description: Add a customer
 *      summary: 
 */
router.post('/', customerController.addCustomer)

/**
 * @swagger
 * /api/customers/:id:
 *  get:
 *      tags: [Customers]
 *      description: Request a customer with given id
 *      summary: 
 */
router.get('/:id', customerController.getCustomerById)

/**
 * @swagger
 * /api/customers/:id/animals:
 *  get:
 *      tags: [Customers]
 *      description: Request all animals of given customer
 *      summary: 
 */
router.get('/:id/animals', customerController.getAnimalsOfCustomer)

/**
 * @swagger
 * /api/customers/:id:
 *  put:
 *      tags: [Customers]
 *      description: Update a customer
 *      summary: 
 */
router.put('/:id', customerController.updateCustomer)

/**
 * @swagger
 * /api/customers/:id:
 *  delete:
 *      tags: [Customers]
 *      description: Delete a customer 
 *      summary: 
 */
router.delete('/:id', customerController.removeCustomer)




// router.get('/:entity', controller.getRessource)
// router.post('/:entity', controller.addCustomer)
// router.get('/:entity/:id', controller.getCustomerById)
// router.put('/:entity/:id', controller.updateCustomer)
// router.delete('/:entity/:id', controller.removeCustomer)

module.exports = router