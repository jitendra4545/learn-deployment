
const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    pin:Number
})


const UserModel=mongoose.model('userlist',userSchema)


module.exports={
    UserModel
}