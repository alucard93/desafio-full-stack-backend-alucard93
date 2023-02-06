import 'reflect-metadata'

import express from 'express'

//error
import 'express-async-errors'

//error
import handleErrorMiddleware from './middlewares/handleError.middleware'

//routes
import userRoutes from './routes/users.routes'
import sessionRoutes from './routes/sessions.routes'
import contactRoutes from './routes/contacts.routes'

var cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)
app.use("/contacts", contactRoutes)

app.use(handleErrorMiddleware)

export default app