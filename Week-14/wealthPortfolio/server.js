import express from 'express'
import mongoose from 'mongoose'

import { userRouter } from './routes/userRoute'
import { financeRouter } from './routes/financeRoute'

const app = express()
const PORT = 8080
app.use(express.json())

app.use('/user', userRouter)
app.use('/finance', financeRouter)

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yathendra:46Ea6RvUxX3YrHc2@cluster0.pl6nda0.mongodb.net/?retryWrites=true&w=majority"
    )
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

start()
