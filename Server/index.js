import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { userRoute } from './userRoute/route.js'

dotenv.config()
const PORT = process.env.PORT
const db_url = process.env.MANGO_URL
const app = express()

app.use(bodyParser.json())
app.use('/mern', userRoute)
mongoose.connect(db_url)
    .then(

        app.listen(PORT,
            () => {
                console.log(`App Startted Succussfully on ${PORT}`)
            }
        )
    )
    .catch(error => {
        console.log(`Connection Failed ${error}`)
    })


