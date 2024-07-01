import express from 'express'
import { userRouter } from './routers/User/userRouter'

const app = express()

app.use(express.json())
app.use(userRouter)

export { app }
