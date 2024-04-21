const hotel = require('../model/hotel.model');

const getAllHotelHandler = async (req, res)=>{
    const hotelCategory = req.query.category;
    try {
        let hotels;
        if(hotelCategory)
        {
            hotels = await hotel.find({category : hotelCategory });
            
        }
        else{
            hotels = await hotel.find({});
        }
        hotels?res.json(hotels):res.status(404).json({message:"no data found"});
    } catch (error) {
        console.log(error);
    }    
}

module.exports = getAllHotelHandler;