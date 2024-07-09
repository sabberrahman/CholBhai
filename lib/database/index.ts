import mongoose from "mongoose"

const MONGODB_URL= process.env.MONGODB_URL;

let cached = (global as any).mongoose || { conn: null , promise :null};

export const connectToDatabase = async ()=>{
    if (cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('mongoDb-url is missing')

    cached.promise= cached.promise || mongoose.connect(MONGODB_URL,{
        dbName:"event",
        bufferCommands: false,
         
    })

    cached.conn = await cached.promise;
    return cached.conn;
}


//line 8-- checks if the conn property of the cached object is already set (meaning a connection has already been established). If so, it simply returns the existing connection, preventing unnecessary re-connection attempts.