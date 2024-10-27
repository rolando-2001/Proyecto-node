class DishController {
  constructor(dishService) {
    this.dishService = dishService;
  }



  allDishes = async (req, res) => {
    await this.dishService
      .getDish()
      .then((product) => res.status(200).json(product))
      .catch((error) =>
        res.status(500).json({ message: "Error al obtener el carrito" })
      );
  };

  
}

module.exports = DishController;
