import { connect } from 'mongoose';


const mongoDB = process.env.MONGODB_URI


const dbConnect = async()=>{
    try {
        let connection = await connect(mongoDB, {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
              
        });
        console.log('DB successfully connected')

        return connection
    } catch (err) {
        console.log('error connecting to DB', err)
        process.exit(1)
    }
}

export default dbConnect;