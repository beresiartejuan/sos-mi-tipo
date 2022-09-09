import mongoose from "mongoose";

export default function connectDatabase(){

    mongoose.connect(MONGO_URI).then((db) =>{
        console.log(`${db.connection.name} already connect like database!`)
    })

}
