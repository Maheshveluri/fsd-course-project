import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { connectDatabase } from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import facultyRoutes from './routes/facultyRoutes.js'
import studentRoutes from './routes/studentRoutes.js'
import { seedFaculty } from './seedFaculty.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.get('/api/health', (request, response) => response.json({ status: 'ok' }))
app.use('/api/student', studentRoutes)
app.use('/api/faculty', facultyRoutes)
app.use(notFound)
app.use(errorHandler)

connectDatabase()
  .then(() => {
    return seedFaculty()
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch((error) => {
    console.error(`Unable to start server: ${error.message}`)
    process.exit(1)
  })
