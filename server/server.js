//import config from './../config/config'
import app from './express.js'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/mernproject", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: mongodb://127.0.0.1:27017/mernproject`)
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', 3000)
})
