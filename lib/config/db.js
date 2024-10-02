import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bisigoodluck:24SSWia3H4iFNCgL@clustertechnotronix.yxle6pl.mongodb.net/abg-blog-nextjs')
    .then (() => console.log("DB Connected"));
}