const { Router } = require('express')
const animalController = require('../controllers/animals.js')

const router = Router();

// Animals

/**
 * @swagger
 * tags:
 *      name: Animals
 *      description: Manage animals
 */

/**
 * @swagger
 * /api/animals:
 *  get:
 *      tags: [Animals]
 *      description: Request all animals
 *      summary: 
 */
router.get('/', animalController.getAnimals)

/**
 * @swagger
 * /api/animals:
 *  post:
 *      tags: [Animals]
 *      description: Add an animal
 *      summary: 
 */
router.post('/', animalController.addAnimal)

/**
 * @swagger
 * /api/animals/:id:
 *  get:
 *      tags: [Animals]
 *      description: Request an animal with given id
 *      summary: 
 */
router.get('/:id', animalController.getAnimalById)

/**
 * @swagger
 * /api/animals/:id:
 *  put:
 *      tags: [Animals]
 *      description: Update an animal
 *      summary: 
 */
router.put('/:id', animalController.updateAnimal)

/**
 * @swagger
 * /api/animals/:id:
 *  delete:
 *      tags: [Animals]
 *      description: Delete an animal 
 *      summary: 
 */
router.delete('/:id', animalController.removeAnimal)
 

module.exports = router