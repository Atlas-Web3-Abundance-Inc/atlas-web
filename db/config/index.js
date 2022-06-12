const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI

const dbConnect = async()=>{
    try {
        await mongoose.connect(mongoDB, {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                useFindAndModify: false,
                useCreateIndex: true
        });
        console.log('DB successfully connected')
    } catch (err) {
        console.log('error connecting to DB', err)
        process.exit(1)
    }
}

module.exports = dbConnect;