const mongoose = require('mongoose'),

connectDB= async() =>{
try{
    const conn= await mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        dbName: "mydb"

    });
    console.log("MongoDb connected Successfully");

}
catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
}

module.exports= connectDB;