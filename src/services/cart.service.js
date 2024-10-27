const Cart = require("../models/cart.model");

class CartService {
  
  constructor() {}



  async getCart() {
    try {
      const carts = await Cart.find().populate("dish_id");
      return {
        data: carts,
      };
    } catch (error) {
      console.log(error);
    }
  }



  async create(_id) {
    try {
      const cartExist = await Cart.findOne({ dish_id: _id } );
      console.log(cartExist);
      if (!cartExist) {
        const cart = new Cart({ dish_id: _id, quantity: 1 });
        await cart.save();
      } else {
        cartExist.quantity += 1;
        await cartExist.save();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async decrement(_id) {
    try {
      const cartExist = await Cart.findOne({ dish_id: _id }, 'quantity'); 
       console.log(cartExist);
       if(cartExist){
        if(cartExist.quantity > 1){
          cartExist.quantity -= 1;
          await cartExist.save()
        }
       }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  async delete(id) {
    try {
      const data = await Cart.findOne({ dish_id: id });

      await Cart.findByIdAndDelete(data._id);
    } catch (error) {
      console.log(error);
    }
  }



   async  cartDatadb() {

        try {
             
             const dataCart= await Cart.find().populate("dish_id")

             return {
                  data: dataCart
             }
       }catch(error){
          console.log( "error ",error )
       }

   }


}

module.exports = CartService;




