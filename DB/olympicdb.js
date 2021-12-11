import mongoose from 'mongoose';


const connectDB = async() =>{
try {
    const options = {
        dbName : 'olympicdb',
        
    }
    await mongoose.connect('mongodb://localhost:27017', options)
    console.log('connected to database successfully');
} catch (error) {
    console.log(error);
}

}

export default connectDB;



