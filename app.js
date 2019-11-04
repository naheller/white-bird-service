const express = require('express')
// const cors = require('cors')
const mongoose = require('mongoose')
const organizations = require('./routes/organization')
const port = process.env.PORT || 5000

mongoose
  .connect('mongodb://localhost:27017/whitebird', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err))

const app = express()
// app.use(cors())
// app.use(express.json())

app.use('/api/organizations', organizations)

app.get('/hello', (req, res) => {
  return res.json({ message: 'Hello world' })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
