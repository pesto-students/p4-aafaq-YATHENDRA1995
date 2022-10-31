const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
  res.send('user list')
})

router.get('/new', (req, res) => {
  res.send('user list new form')
})

router.post('/new', (req, res) => {
  res.send('Post Request')
})

router.get('/:id', (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`)
})

router.route('/:id')
  .get((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {})

router.param(':id', (req, res, next, id) => {
  console.log(id)
  next()
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router