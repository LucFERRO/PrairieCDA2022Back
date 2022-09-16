const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const Joi = require('joi')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const customerRoutes = require('./routes/customers.js')
const animalRoutes = require('./routes/animals.js')
const healthRecordRoutes = require('./routes/healthRecords.js')
const visitRoutes = require('./routes/visits.js')
const port = process.env.PORT || 3000

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: '🐶🐶 WOUF WOUF MIAOU MIAOU 🐱🐱 API',
            description: 'Projet prairie CDA 2022, app vétérinaire',
            contact: {
                name: 'Best front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url:`http://localhost:${port}`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./routes/*.js`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())
app.set('view engine','ejs')
app.listen(port, () => console.log(`Listening on port ${port}...`));


// ROUTES
app.use('/api/customers', customerRoutes)
app.use('/api/animals', animalRoutes)
app.use('/api/healthrecords', healthRecordRoutes)
app.use('/api/visits', visitRoutes)

app.get('/', (req, res) => {
    // res.render('index')
    res.send('Aller voir sur /api/docs pour le SWAGGER');
})





// const courses = [
//     { id: 1, name: 'Course1'},
//     { id: 2, name: 'Course2'},
//     { id: 3, name: 'Course3'},

// ]

// app.get('/api/courses', (req, res) => {
//     res.send(courses)
// })

// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find( c => c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send('Error 404 : The course with the given ID was not found.')
//     res.send(course)
// })

// function validateCourse(course) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     }

//     return Joi.validate(course,schema)
// }

// app.post('/api/courses', (req, res) => {
    
//     const {error} = validateCourse(req.body)

//     if (error) return res.status(400).send(error.details[0].message)

//     const course = {
//         id: courses.length+1,
//         name: req.body.name
//     }
//     courses.push(course)
//     res.send(course)
// })

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find( c => c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send('Error 404 : The course with the given ID was not found.')

//     const {error} = validateCourse(req.body)

//     if (error) return res.status(400).send(error.details[0].message)

//     course.name = req.body.name
//     res.send(course)

// })

// app.delete('/api/courses/:id', (req, res) => {
//     const course = courses.find( c => c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send('Error 404 : The course with the given ID was not found.')

//     const index = courses.indexOf(course)
//     courses.splice(index, 1)

//     res.send(course)

// })