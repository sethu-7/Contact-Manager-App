//@desc GET contacts
//@routes /api/contacts
//public
const Contact=require('../models/contactModel')
const asyncHandler=require("express-async-handler")
const getContacts=asyncHandler( async (req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json({contacts})
})

const getContactById= asyncHandler(async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if (!contact){
        res.status(400)
        throw new Error("Contact not found!")
        
    }
    res.status(200).json(contact)
})

const createContact=asyncHandler(async (req,res)=>{
    console.log("the body is :",req.body) 
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(404)
        throw new Error("All fields are mandatory")
        
    }
    const contact=await Contact.create({
        name,email,phone,user_id:req.user.id
    })
    res.status(201).json({contact})
})

const updateContact=asyncHandler(async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contct not found")
    }

    if (contact.user_id.toString()!=req.user.id){
        res.status(403)
        throw new Error("Not authorized")
    }
    else{

        await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(contact)
    }
})


const deleteContact=asyncHandler(async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if (!contact){
        res.status(404)
        throw new Error("Contact not found!")
        
    }

    if (contact.user_id.toString()!=req.user.id){
        res.status(403)
        throw new Error("nto authorized")
    }
    else{

    res.status(200).json(contact)
    await Contact.findByIdAndDelete(req.params.id)
    console.log('delete')
    }
})


module.exports={
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}