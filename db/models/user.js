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
    addressCity: {
        type: String, 
        required: false,
        trim: true
    },
    addressState: {
        type: String, 
        required: false,
        trim: true
    },
    addressZip: {
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
    landlordCity: {
        type: String, 
        required: false,
        trim: true
    },
    landlordState: {
        type: String, 
        required: false,
        trim: true
    },
    landlordZip: {
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

module.exports = mongoose?.models?.user ? mongoose.models.user: mongoose.model('user', UserSchema)
