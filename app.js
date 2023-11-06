const express = require('express')
const app = express()
const taskRouter = require('./routes/taskRouter')

// middleware
app.use(express.json())

// static asset
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', taskRouter)


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})