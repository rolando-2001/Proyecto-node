const express = require('express');
const cors = require('cors');
const dotenv= require('dotenv');

const dishRouter = require('./routers/router.dish.js');
const cartRouter = require('./routers/router.cart.js');
const userRouter=require('./routers/router.user.js')

const db = require('./mongo/db.js');
/* const Dish = require('./models/model.dish.js');
const dishes = require('./data/data.dish.js'); */

const app = express();

app.use(cors());
dotenv.config();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//router
app.use('/api/', [dishRouter,cartRouter,userRouter]);



app.get('/',async (req, res) =>{ 
    res.json({ message: 'Hello World!' });
});



app.listen(process.env.PORT  , () => {
    console.log('Server is running on port 3000');
});


( async () => {
    try {
        await db();
    } catch (error) {
        console.log(error);
    }
} )();
