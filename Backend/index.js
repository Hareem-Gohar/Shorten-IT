import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import urlRoutes from './Routers/urlRoutes.js';
import connectDB from './Config/db.js';


dotenv.config();  

const app = express();
const PORT = process.env.PORT || 5000;


connectDB(); 

app.use(cors());

app.use(bodyParser.json());
app.use('/', urlRoutes);


app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));
