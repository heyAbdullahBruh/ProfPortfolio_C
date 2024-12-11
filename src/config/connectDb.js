import mongoose from "mongoose";

const DBURI =process.env.DB_URI

export const  CONNECT_DB=async ()=>{
    try {
        await mongoose.connect(DBURI);
          console.log('Connected to MongoDB')
    } catch (error) {
         console.error('Could not connect to DB', error.message);
    };
};

