const express =require("express")
const UserCotroller=require("../controllers/controller.user.js")
const UserService=require("../services/user.service.js")
 
const router = express.Router()

const userService=new UserService()
const userController = new UserCotroller(userService)

router.post('/auth/register',userController.register)
router.post('/auth/login',userController.login)

module.exports=router;
