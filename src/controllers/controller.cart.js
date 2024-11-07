

class CartController {

  constructor(cartService) {
    this.cartService = cartService;
  }



  allCarts = async (req, res) => {
    await this.cartService
      .getCart()
      .then((product) => res.status(200).json(product))
      .catch((error) =>
        res.status(500).json({ message: "Error al obtener el carrito" })
      );
    
  }; 
  
  createCart = async (req, res) => {
    const { _id } = req.body;
    
   
    await this.cartService.create(_id)
    .then(() => console.log("Se agrego al carrito"))
    .catch((error) => console.log(error));
    
  };

  deleteCart = async (req, res) => {
    const { id } = req.params;
    await this.cartService.delete(id)
    .then(() => console.log("Se elimino del carrito"))
    .catch((error) => console.log(error));
  }

  decrementCart = async (req, res) => {

    const { _id } = req.body; 
    const { id } = req.params;
    await this.cartService.decrement(id)
    .then(() => console.log("Se decremento del carrito"))
    .catch((error) => console.log(error));
  }
  
  
  shopyCart = async (req, res) => {
     
     const data={
        uid:req.uid,
        name:req.name,
        card:req.body
     }
     await this.cartService.shop(data)
     .then((data)=>res.status(200).json(data))
      .catch((error)=>res.status(500).json({message:"Error"}))

  }


}

module.exports = CartController;



