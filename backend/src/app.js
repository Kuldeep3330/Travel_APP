import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app= express()
 //using middlewares
app.use(cors({
    origin:'http://localhost:5173/',
    credentials:true
}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({ limit: '16kb',extended:true}))
app.use(express.static("public"))
app.use(cookieParser());

//importing routes
import hotelRouter from './routes/hotel.router.js'
import hotelDataAddedToDBRouter from './routes/dataimport.route.js'
import categoryDataAddedToDBRouter from './routes/categoryimport.router.js'
import categoryRouter from './routes/category.router.js';
import singleHotelRouter from './routes/singlehotel.router.js'
import authRouter from './routes/auth.router.js'
import wishListRouter from "./routes/wishlist.router.js"




app.get("/", (req, res) => {
    res.send("Hello World");
  });
app.use('/api/v1/hotels', hotelRouter)
app.use("/api/v1/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/v1/categoriesdata", categoryDataAddedToDBRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/hotels", singleHotelRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/wishlist", wishListRouter);



export {app}