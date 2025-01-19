import express from 'express'
import Category from '../model/category.model.js'
import categories from '../data/categories.js'

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            // Clear the collection
            await Category.deleteMany({});
            const categoriesInDB = await Category.insertMany(categories.data);
            res.status(200).json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.status(500).json({ message: "Could not add categories data to DB", error: err.message })
        }
    })

export default router;