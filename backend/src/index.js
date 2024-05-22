import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from './db/connectToMongoDB.js';


dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000



// app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Example app listening on port ${PORT}`)
})