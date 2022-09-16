const { Router } = require('express')
const visitController = require('../controllers/visits')

const router = Router();

// Visits

/**
 * @swagger
 * tags:
 *      name: Visits
 *      description: Manage visits
 */

/**
 * @swagger
 * /api/visits:
 *  get:
 *      tags: [Visits]
 *      description: Request all visits
 *      summary: 
 */
router.get('/', visitController.getVisits)

/**
 * @swagger
 * /api/visits/animal/:id:
 *  get:
 *      tags: [Visits]
 *      description: Request all visits of given animal
 *      summary: 
 */
 router.get('/animal/:id', visitController.getVisitsOfGivenAnimal)

/**
 * @swagger
 * /api/visits:
 *  post:
 *      tags: [Visits]
 *      description: Add an visit
 *      summary: 
 */
router.post('/', visitController.addVisit)

/**
 * @swagger
 * /api/visits/:id:
 *  get:
 *      tags: [Visits]
 *      description: Request an visit with given id
 *      summary: 
 */
router.get('/:id', visitController.getVisitById)

/**
 * @swagger
 * /api/visits/:id:
 *  put:
 *      tags: [Visits]
 *      description: Update an visit
 *      summary: 
 */
router.put('/:id', visitController.updateVisit)

/**
 * @swagger
 * /api/visits/:id:
 *  delete:
 *      tags: [Visits]
 *      description: Delete an visit 
 *      summary: 
 */
router.delete('/:id', visitController.removeVisit)
 

module.exports = router