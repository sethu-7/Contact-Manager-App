//@desc GET contacts
//@routes /api/contacts
//public
const getContacts=((req,res)=>{
    res.status(200).json({message:"getting all contacts"})
})

const getContactById=((req,res)=>{
    res.status(200).json({message:`getting id ${req.params.id}`})
})

const createContact=((req,res)=>{
    res.status(200).json({message:"creating a cotact"})
})

const updateContact=((req,res)=>{
    res.status(200).json({message:`updating contact id ${req.params.id}`})
})

const deletecontact=((req,res)=>{
    res.status(200).json({message:`deleting id ${req.params.id}`})
})


module.exports={
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deletecontact
}