import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// import { userRouter } from './router/userRouter'

dotenv.config()

export const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Server running on port ${Number(process.env.PORT)}`)
})

// app.use("/users", userRouter)