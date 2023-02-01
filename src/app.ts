import express from 'express'
import userRoutes from './routes/users.routes'

const app = express()

app.use(express.json())
app.use(userRoutes, "/users")

app.listen(3000, () => {
    console.log('Server runnng in port 3000')
})