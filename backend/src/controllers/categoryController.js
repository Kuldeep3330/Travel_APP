import Category from "../model/category.model.js";
const categoryHandler = async (req, res)=>{
    try {
        const categories = await Category.find({});
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({message: "Could not find categories", error:error.message})
   }
}

export default categoryHandler