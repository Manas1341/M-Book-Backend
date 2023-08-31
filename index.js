const connectToMongo = require('./db')
const express = require('express')
connectToMongo()

const app = express()
const port = process.env.PORT || 4000
var cors = require('cors')

app.use(cors())
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on http://localhost: ${port}`)
})