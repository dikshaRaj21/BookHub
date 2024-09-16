const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn")
const cors = require("cors")
const user = require("./routes/user")
const Books = require("./routes/book")
const Favourite = require("./routes/favourite")
const Cart = require("./routes/cart")
const Order = require("./routes/order")


app.use(cors());
app.use(express.json())

//route handling
app.use("/api/v1", user);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

//creating PORT
app.listen(process.env.PORT, ()=>{
    console.log(`server started at port ${process.env.PORT}`);
})