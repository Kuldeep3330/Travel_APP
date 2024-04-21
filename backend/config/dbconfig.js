const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://kuldeepkumar:Puhu1234@traveldbcluster.6gj9pze.mongodb.net/TravelAppDB?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;