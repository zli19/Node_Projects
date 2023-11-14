const express = require('express')
const app = express()
const taskRouter = require('./routes/taskRouter')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')


// middleware
app.use(express.json())

// static asset
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', taskRouter)

app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 3000

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

