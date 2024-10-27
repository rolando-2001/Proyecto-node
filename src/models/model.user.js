const mongoose = require("mongoose")
const Schema=mongoose.Schema

const userSchema = new Schema ({

    first_name: {
        type: String,
        required: true,
        maxlength: 255
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 255
    },
    phone_number: {
        type: String,
        maxlength: 9
    },
    email: {
        type: String,
        required: true,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        maxlength: 255
    },
    dni: {
        type: String,
        maxlength: 8
    },
    img_url: {
        type: String,
        maxlength: 255
    },
    is_google_account: {
        type: Boolean,
        default: false
    },
    is_verified_email: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }


})


const User = mongoose.model("User",userSchema);

module.exports=User


