import Wishlist from "../model/wishlist.model.js" 

const createWishlistHandler = async(req, res)=>{
    const newWishlist = new Wishlist(req.body);
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch (error) {
        console.error("Error creating wishlist:", error.message);       
        res.status(500).json({message:"failed to create wishlist"});
        
    }
}

const deleteWishlistHandler = async(req, res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"hotel deleted from Wishlist"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"hotel is not deleted from Wishlist"});
    }
};

const getWishlistHandler =  async(req, res)=>{
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist):res.json({message:"no item found"});

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"not get wishlist"});
        
    }
};

export {createWishlistHandler, deleteWishlistHandler, getWishlistHandler};