import express from 'express'
// Put it like this bc we are using modules 
import employeeRoutes from './routes/employeeRoutes.js'
import {PORT} from './config.js'

const app = express()
// For the app tu be able to understand the json body 
app.use(express.json())

app.use('/api/v1/employees', employeeRoutes)

// Middleware if page is not found 
app.use((req, res, next) => {
    res
    .status(404)
    .json({
        message: "endpoint not found"
    })
    next()
})

export default app 
