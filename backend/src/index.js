import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import connectToMongoDB from './db/connectToMongoDB.js';
import AuthRoutes from './routes/auth.routes.js'
import UserRoutes from "./routes/user.routes.js";


dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000



app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',AuthRoutes);
app.use('/api/users',UserRoutes);

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Example app listening on port ${PORT}`)
})