const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.mongooo)
.then(()=>{
    console.log('Mongodb is connected')
}).catch(err=>{
    console.log(err)
})
app.listen(3000,()=>{
console.log('server is running on port 3000 !')
})