const { registerUser, currentUser, loginUser } = require('../controllers/userController')
const validationHandler=require('../middlewares/validationHandler')

express=require('express')
router=express.Router()

router.post('/register',registerUser).post('/login',loginUser)

router.get('/current',validationHandler,currentUser)

module.exports=router