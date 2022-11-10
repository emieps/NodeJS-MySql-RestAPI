import express from 'express'
import employeeRoutes from './routes/employeeRoutes.js'

const app = express()
app.use(express.json())

app.use('/api/v1/employees', employeeRoutes)

app.use((req, res, next) => {
    res
    .status(404)
    .json({
        message: "endpoint not found"
    })
    next()
})

export default app 
