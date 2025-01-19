import express from 'express'
import cors from 'cors'
import hotelRouter from './routes/hotel.router.js'
const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:'16kb'}))


// const hotelRouter = require("./routes/hotel.router");
// const hotelDataAddedToDBRouter = require("./routes/dataimport.route");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
// const categoryRouter = require("./routes/category.router")
// const singleHotelRouter = require("./routes/singlehotel.router")
// const authRouter = require("./routes/auth.router")
// const wishListRouter = require("./routes/wishlist.router")

app.get("/", (req, res) => {
    res.send("Hello World");
  });
app.use('/api/hotels', hotelRouter)


// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("/api/categoriesdata", categoryDataAddedToDBRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/hotels", singleHotelRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/wishlist", wishListRouter);



export {app}