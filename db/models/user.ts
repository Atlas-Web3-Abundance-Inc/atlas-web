import mongoose from 'mongoose';

const {Schema} = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
    firstName: {
        type: String, 
        required: true,
        trim: true
    },
    lastName: {
        type: String, 
        required: true,
        trim: true
    },
    phone: {
        type: String, 
        required: true,
        trim: true
    },
    company: {
        type: String, 
        required: true,
        trim: true
    },
    address: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        trim: true
    },
    twitterLink: {
        type: String, 
        required: true,
        trim: false
    },
    linkedinLink: {
        type: String, 
        required: true,
        trim: false
    },
    facebookLink: {
        type: String, 
        required: true,
        trim: false
    },
    landlordAddress: {
        type: String, 
        required: true,
        trim: true
    },
    landlordEmail: {
        type: String, 
        required: true,
        trim: true
    },
    landlordPhone: {
        type: String, 
        required: true,
        trim: true
    }, 
})

module.exports = mongoose.models.User ||mongoose.model('User',UserSchema)