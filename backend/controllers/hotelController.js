import hotel from "../model/hotel.model.js"

const getAllHotelHandler = async (req, res)=>{
    const hotelCategory = req.query.category;
    try {
        let hotels;
        if(hotelCategory)
        {
            hotels = await hotel.find({category : hotelCategory });
            
        }
        else{
            //otherwise fetch all hotels
            hotels = await hotel.find({});
        }
        hotels?res.status(200).json(hotels):res.status(404).json({message:"no data found"});
    } catch (error) {
        console.log("Error fetching hotels:", err.message);
        res.status(500).json({ message: "Server error", error: err.message });
      }   
}

export default getAllHotelHandler;