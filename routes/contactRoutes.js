const express=require('express')
const router=express.Router()
const {getContacts,
    getContactById,
    createContact,
    updateContact,
    deletecontact}=require('../controllers/contactController')

router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContactById).put(updateContact).delete(deletecontact)

module.exports=router   