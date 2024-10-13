const asyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const User=require('../models/userModel')

const registerUser=asyncHandler(async (req,res)=>{
    const {username,useremail,password}=req.body
    if(!username || !useremail || !password){
        res.status(400)
        throw new Error("All mandatory")
    }

    const userAvailable=await User.findOne({useremail})
    if (userAvailable){
        res.status(400)
        throw new Error("USer already Existing!!")
    }
    const hashedPassword=await bcrypt.hash(password,10)
    console.log("HAshed Password",hashedPassword)

    const user=await User.create({
        username,
        useremail,
        password:hashedPassword
    })
    console.log("user created")
    if(user){
        res.status(201).json({username : user._id,username:user.username,email : user.useremail})
    }
    else{
        res.status(400)
        throw new Error("user data not valid")
    }
    res.status(200).send("register user")
})

const loginUser=asyncHandler(async(req,res)=>{
    const {useremail,password}=req.body
    if(!useremail||!password){
        res.status(400)
        throw new Error("All fields aer mandatory")
    }
    const user=await User.findOne({useremail})
    console.log("login??")
    if(user && (await bcrypt.compare(password,user.password))){
        const accesToken=jwt.sign({
            user:{
                username:user.username,
                useremail:user.useremail,
                id:user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    res.status(200).json({accesToken})
    }
    else{
        res.status(401)
        throw new Error("Validation Not done")
    }
})

//@ access private
const currentUser=asyncHandler(async(req,res)=>{
    res.status(200).send("current user")
})

module.exports={
    registerUser,
    loginUser,
    currentUser
}