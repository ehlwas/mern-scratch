const { sampleControllerFunction } = require('../controllers/sampleController')
const { protect } = require('../middleware/authMiddleware')

const sampleRoute = require('express').Router()

sampleRoute.get('/', protect, sampleControllerFunction)

module.exports = sampleRoute