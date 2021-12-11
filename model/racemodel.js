import mongoose from 'mongoose';


const olympicSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true,
    },
    name : {
        type: String,
        required: true,
        trim : true,
    },
    dob:{
        type: Date,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
    },
    score: {
        type : Number,
        required: true,
        trim: true,
    },
    event: {
        type: String,
        default: '100m'
    }
})


const Mensrankingmodel = new mongoose.model('Men', olympicSchema )

export default Mensrankingmodel;