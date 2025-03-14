import mongoose,{Schema} from 'mongoose';

const wishlistSchema = new Schema({
    hotelId: { type: String, required: true }
}, {
    timestamps:true
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;