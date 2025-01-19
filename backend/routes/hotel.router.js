import express from "express";
const router = express.Router();
import getAllHotelHandler from "../controllers/hotelController.js";
// import  hotels  from "../data/hotels.js";
import Hotel from "../model/hotel.model.js";

router.route("/")//---->https://localhost:3500/api/hotels/
    .get(getAllHotelHandler)

router.route("/").get(async (req, res) => {
    const hotelCategory= req.query.category
  try {
    let hotels
    if(hotelCategory){
        hotels = await Hotel.find({category: hotelCategory});
    }
     
    hotels
      ? res.status(200).json(hotels)
      : res.status(404).json({ message: "no data found" });
  } catch (err) {
    console.log("Error fetching hotels:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
