import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'

const app = express()

const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('👍 Database has connected successfully')

    app.use((req, res, next) => {
      console.log(`🚨 Incoming ${req.method} request on URL ${req.url}`)
      next()
    })

    app.use(express.json())

    app.use('/api', router)

    app.listen(port, () => console.log(`🏃‍♂️ Express is up and running on port ${port}`))

  } catch (err) {
    console.log('🚨 Something has gone wrong with the DB connection')
    console.log(err)
  }

}

startServer()