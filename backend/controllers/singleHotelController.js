import Hotel from "../model/hotel.model.js";



const singleHotelHandler = async(req, res)=>{
    try {
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        res.status(200).json(hotel);

    } catch (error) {
        console.error("Error fetching hotel:", error);
        res.status(404).json({message:"no hotel found", error:error.message});
        
    }
};

export default singleHotelHandler;