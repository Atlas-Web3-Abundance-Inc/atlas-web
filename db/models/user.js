const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    firstName: {
        type: String, 
        required: false,
        trim: true
    },
    lastName: {
        type: String, 
        required: false,
        trim: true
    },
    phone: {
        type: String, 
        required: false,
        trim: true
    },
    company: {
        type: String, 
        required: false,
        trim: true
    },
    address: {
        type: String, 
        required: false,
        trim: true
    },
    email: {
        type: String, 
        required: false,
        trim: true
    },
    twitterLink: {
        type: String, 
        required: false,
        trim: false
    },
    linkedinLink: {
        type: String, 
        required: false,
        trim: false
    },
    facebookLink: {
        type: String, 
        required: false,
        trim: false
    },
    landlordAddress: {
        type: String, 
        required: false,
        trim: true
    },
    landlordEmail: {
        type: String, 
        required: false,
        trim: true
    },
    landlordPhone: {
        type: String, 
        required: false,
        trim: true
    }, 
})

let User = mongoose.model('user',UserSchema);


export default User;