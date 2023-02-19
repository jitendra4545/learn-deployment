


const express=require('express')
const { UserModel } = require('../model/userModel')
const app=express()
const cors=require('cors')
const userRouter=express.Router()
//app.use(cors())
app.use(express.json())



userRouter.get('/',async(req,res)=>{
    try{
  let data =await UserModel.find()
  res.send(data)
    }catch(err){
 res.send('enter valid url')
    }
})

userRouter.post('/add',async(req,res)=>{
 let body= req.body

    try{
   let data=new UserModel(body)
   await data.save()
 res.send(data)
    }catch(err){
        res.send('enter valid url')
    }
})

userRouter.patch('/update/:id',async(req,res)=>{
    let id=req.params.id
    const {name,age,city,pin}=req.body
    try{
      let data=await UserModel.updateOne({"_id":id},{$set:{name:name,age:age,city:city,pin:pin}})
     res.send(data)
    }catch(err){
        res.send('enter valid url')
    }
})
userRouter.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    try{
      let data=await UserModel.remove({"_id":id})
      res.send(data)
    }catch(err){

    }
})

module.exports={
    userRouter
}