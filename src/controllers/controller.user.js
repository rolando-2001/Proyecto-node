

class  UserController {



  constructor(userService){
     this.userService=userService
  }

   register= async (req,res)=>{
      const data=req.body

     await this.userService.registerUser(data)
     .then((data)=>res.status(201).json({data}) )
     .catch(()=> res.status(500).json({message:"Error al registrar el usuario"}))
       
    
    }   
   





}

module.exports=UserController;

