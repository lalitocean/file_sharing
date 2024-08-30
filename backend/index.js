import express from 'express'
import dotenv from 'dotenv'
import dbconnection from './db/db.js'
import router from './Routes/route.js'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT || 5000
const app = express()
app.use(cors({
    origin: 'https://sharefilelink.netlify.app/',
}))

app.use('/api/v1', router)


dbconnection();
app.listen(port, () => {
    console.log(`running on port ${port}`)
})