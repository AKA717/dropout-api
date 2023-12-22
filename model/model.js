const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password:{
        type: String,
        required: [true, 'password field is required']
    },
    date : {
        type: Date,
        default : Date.now
    }
});

const AdminLoginSchema = new Schema({
    username : {
        type:String,
        required: [true, 'username field is required']
    },
    password:{
        type: String,
        required: [true, 'password field is required']
    }
    },
    {
        collection:'admin'
    });

const StudentDataSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'firstname field is required']
    },
    lastname: {
        type: String,
        required: [true, 'firstcourse field is required']
    },
    course: {
        type: String,
        required: [true, 'course field is required']
    },
    age: {
        type: String,
        required: [true, 'age field is required']
    },
    gender: {
        type: String,
        required: [true, 'gender field is required']
    },
    caste: {
        type: String,
        required: [true, 'caste field is required']
    },
    area: {
        type: String,
        required: [true, 'area field is required']
    },
    district: {
        type: String,
        required: [true, 'district field is required']
    },
    state: {
        type: String,
        required: [true, 'state field is required']
    },
    pincode: {
        type: String,
        required: [true, 'pincode field is required']
    },
    reason: {
        type: String,
        required: [true, 'reason field is required']
    }
},
    {
        collection: 'admin'
    });


const User = mongoose.model('users',UserSchema);
const AdminLogin = mongoose.model('admin',AdminLoginSchema);
const StudentData = mongoose.model('s-data',StudentDataSchema); 

module.exports = {
    User,
    AdminLogin,
    StudentData
};
