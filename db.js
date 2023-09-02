const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://manasparatane:bseUHRZzb6ymQtJw@cluster0.52txejc.mongodb.net/"
mongoose.set('strictQuery' , true)

const connectToMongo =()=>{
    mongoose.connect(mongoURI,{
    }).then(()=>{
        console.log("Connected to Mongo Successfully")
    }).catch((error)=>{
        console.error("Error connecting to  MongoDB",error)
    })
}
module.exports = connectToMongo;
