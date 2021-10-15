const { Router } = require('express')
const router = Router()

const testController = require('../controllers/testController.js')

// Test route
router.use('/test', (req, res) => {
  res.end('Test API!')
})

router.get('/getMenu', testController.getMenu)

module.exports = router
