import mongoose from "mongoose";

export default async function connectDatabase(){

    await mongoose.connect(process.env.MONGO_URI)

}
