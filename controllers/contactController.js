//@desc GET contacts
//@routes /api/contacts
//public
const asyncHandler=require("express-async-handler")
const getContacts=asyncHandler( async (req,res)=>{
    res.status(200).json({message:"getting all contacts"})
})

const getContactById= asyncHandler(async (req,res)=>{
    res.status(200).json({message:`getting id ${req.params.id}`})
})

const createContact=asyncHandler(async (req,res)=>{
    console.log("the body is :",req.body) 
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
        
    }
    res.status(201).json({message:"creating a cotact"})
})

const updateContact=asyncHandler(async (req,res)=>{
    res.status(200).json({message:`updating contact id ${req.params.id}`})
})

const deletecontact=asyncHandler(async (req,res)=>{
    res.status(200).json({message:`deleting id ${req.params.id}`})
})


module.exports={
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deletecontact
}