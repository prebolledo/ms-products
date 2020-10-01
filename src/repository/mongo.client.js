const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

export const connect = async () => {
    await mongoose.connect(uri, {
        useUnifiedTopology: true,                
        useNewUrlParser: true,
        useCreateIndex: true,        
        useFindAndModify: false,
        poolSize: 2,
        socketTimeoutMS: 480000,
        keepAlive: 20,
        connectTimeoutMS: 30000,  
    });
    const connection = mongoose.connection;
    return connection;
};

export default mongoose;
