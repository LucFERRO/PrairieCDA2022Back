const { Router } = require('express')
const healthRecordController = require('../controllers/healthRecords.js')

const router = Router();

// Health Records

/**
 * @swagger
 * tags:
 *      name: HealthRecords
 *      description: Manage health records
 */

/**
 * @swagger
 * /api/healthRecords:
 *  get:
 *      tags: [HealthRecords]
 *      description: Request all healthRecords
 *      summary: 
 */
router.get('/', healthRecordController.getHealthRecords)

/**
 * @swagger
 * /api/healthRecords:
 *  post:
 *      tags: [HealthRecords]
 *      description: Add an healthRecord
 *      summary: 
 */
router.post('/', healthRecordController.addHealthRecord)

/**
 * @swagger
 * /api/healthRecords/:id:
 *  get:
 *      tags: [HealthRecords]
 *      description: Request an healthRecord with given id
 *      summary: 
 */
router.get('/:id', healthRecordController.getHealthRecordById)

/**
 * @swagger
 * /api/healthRecords/:id:
 *  put:
 *      tags: [HealthRecords]
 *      description: Update an healthRecord
 *      summary: 
 */
router.put('/:id', healthRecordController.updateHealthRecord)

/**
 * @swagger
 * /api/healthRecords/:id:
 *  delete:
 *      tags: [HealthRecords]
 *      description: Delete an healthRecord 
 *      summary: 
 */
router.delete('/:id', healthRecordController.removeHealthRecord)
 

module.exports = router