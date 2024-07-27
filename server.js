import express from 'express'
import cors from 'cors'
import router from './appRoutes/routes.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors({
    origin: 'https://displaylivebrinkkk.netlify.app',
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'] 
  }))


app.use('/',router)



app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})