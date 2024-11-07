

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

  login = async (req,res)=>{
    
    await this.userService.loginUser(req.body)
    .then((data)=>res.status(200).json({data}))
    .catch(()=> res.status(500).json({message:"Error al loguear el usuario"}))
      
  }
   
}

module.exports=UserController;

