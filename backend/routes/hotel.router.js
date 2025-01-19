
import express from "express"
const router = express.Router();
// import getAllHotelHandler from "../controllers/hotelController.js";
import  hotels  from "../data/hotels.js";

// router.route("/")//---->https://localhost:3500/api/hotels/
//     .get(getAllHotelHandler)

router.route('/').get((req, res)=>{
    res.json(hotels.data)
    
})

export default router;