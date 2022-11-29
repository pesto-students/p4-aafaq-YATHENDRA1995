import express from 'express'
import mongoose from 'mongoose'
import upload from 'express-fileupload'

import { userRouter } from './routes/userRoute'
import { financeRouter } from './routes/financeRoute'

const app = express()
const PORT = 8080
app.use(express.json())
app.use(upload())

// User Routes
app.use('/user', userRouter)

// Finance Routes
app.use('/finance', financeRouter)

// File Upload Routes
app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/file-upload', (req, res) => {
  if(req?.files) {
    let file = req?.files?.file
    let fileName = file?.name
    file.mv('./uploads/' + fileName, (err, file) => {
      if (err) { throw err }
      else {
        res.send('File uploaded successfully')
      }
    })
  }
})

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017"
    )
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

start()
