const express = require('express')
const app = express()
const taskRouter = require('./routes/taskRouter')
const connectDB = require('./db/connect')
require('dotenv').config()


// middleware
app.use(express.json())

// static asset
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', taskRouter)

const port = 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

