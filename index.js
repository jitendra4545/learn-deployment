const express=require('express')
const { connected } = require('./config/db')
const app=express()
const {userRouter} =require('./routes/UserRoutes')
const cors=require('cors')

app.use(express.json())
 app.use(cors())
app.use('/user',userRouter)

app.listen(process.env.port,async()=>{
    try{
       await connected

       console.log('connected to DB')
    }catch(err){
         console.log('disconnected')
    }
    console.log(`server running on port ${process.env.port}`)
})