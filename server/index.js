const express=require('express');
const app=express();
const cors=require('cors')
const mongoose=require('./data/database_connection')

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(require('./routes/routes'))
const port=8080;
app.listen(port,()=>{
    console.log("Port is up and running on port:",port)
})