import express from 'express';
import connectDB from './DB/olympicdb.js'
import web from './routes/web.js'
const app = express();



connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use('/', web);










app.listen(3000, ()=>{
    console.log('listening on port 3000');
})