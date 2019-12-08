import express from 'express'
import router from '../routes/routes'
import mongoose from 'mongoose'

const DB_NAME = process.env.DB_NAME
const DB_PWD = process.env.DB_PWD

const CONNECTION_URL = `mongodb+srv://root:eastood0009@cluster0-75fsj.mongodb.net/test?retryWrites=true&w=majority`

const app = express()

// Conncect to Mongoose and set up connection variable
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
const db = mongoose.connection
 
// Added connection for DB connection
if(!db) 
    console.log("Error connecting db")
else
    console.log("DB Connected Successfully!")

// Setup Server Port
const port = process.env.PORT || 3000;

app.use(express.json())

app.use(router);

app.listen(port, () => console.log(`Listening to ${port}`))

export default app;