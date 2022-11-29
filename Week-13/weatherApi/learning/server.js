/**Importing express package */
const express = require('express')
/**To make API calls */
const request = require('request')

const app = express()
const PORT = 8080

// app.use(logger)

app.get('/', logger, logger, (req, res) => {
  // res.status(200).send('Hello this is a weather api project')
  // res.download('filepath')
  res.status(200).json({ message: 'Hello this is a weather api project'})
})

const userRouter = require('./users')

// app.use(express.json())

app.use('/users', userRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

/** Starting Server */
app.listen(PORT, () => { console.log(`Listening on PORT : ${PORT}`)})
