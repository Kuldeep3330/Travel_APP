import express from 'express'
import Hotel from '../model/hotel.model.js';
import hotels from '../data/hotels.js';

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            //clearing the existing/previous hotel data
            await Hotel.deleteMany();
            //insert new hotel data
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            //data inserted success
            res.status(201).json(hotelsInDB);
        }catch(err){
            console.log("error adding hotels to the db",err);
            res.json(500).json({ message: "Could not add data to DB"})
        }
    })
export default router;

