import mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbUrl: unknown = process.env.dbUri;
// const dbUrl = "mongodb://localhost:27017/test";

async function connect() {
    try {
        return mongoose.connect("mongodb://localhost:27017/test");    
    } catch (error) {
        console.error(error);
        
        process.exit(1);
    };  
};
export default connect;