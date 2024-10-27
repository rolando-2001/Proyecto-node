const Dish = require("../models/model.dish");

class DishService {
  constructor() {}

  async getDish() {
    try {
     
      const dishes = await Dish.find();
      return {
        data: dishes
      };
      
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DishService;
