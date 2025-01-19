import dotenv from "dotenv";
import {app} from "./app.js";
import connectDB from "./db/db-index.js";



dotenv.config({
  path:'./env'
})



const PORT= process.env.PORT || 3000


// const hotelRouter = require("./routes/hotel.router");
// const hotelDataAddedToDBRouter = require("./routes/dataimport.route");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
// const categoryRouter = require("./routes/category.router")
// const singleHotelRouter = require("./routes/singlehotel.router")
// const authRouter = require("./routes/auth.router")
// const wishListRouter = require("./routes/wishlist.router")

// const connectDB = require("./db/db-index");

// const app = express();

// app.use(cors());
// app.use(express.json());
// connectDB();

// const PORT=3500;

// app.get("/", (req, res) => {
//     res.send("Hello World");
//   });

// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("/api/categoriesdata", categoryDataAddedToDBRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/hotels", singleHotelRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/wishlist", wishListRouter);

connectDB()
.then(()=>{
  app.listen(PORT, ()=>{
    console.log(`sever is running at ${PORT}`);    
  })
})
.catch((err)=>{
  console.log(`MONGODB Connection failed`, err.message)
  process.exit(1);
})




