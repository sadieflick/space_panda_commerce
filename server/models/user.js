const mongoose = require("mongoose");
var ProductSchema = require('./product');

var UserSchema = new mongoose.Schema({
    f_name:  { 
        type: String,  
        required: [true, 'first name is required'],
        minlength: [2, 'must be at least 2 characters']},
    l_name:  { 
        type: String, 
        required: [true, 'last name is required'], 
        minlength: [2, 'last name must be at least 2 characters']},
    email: { 
        type: String, 
        required: [true, 'email is required'],
        unique: [true, 'email already exists'],
        minlength: [1, 'email must be greater than 1 character'], 
        maxlength: [150, 'email cannot be greater than 150 characters']},
    pwd: { 
        type: String, 
        required: [true, 'password is required'],
        minlength: [8,'password must at least be 8 characters']},
    birthday: {
        type: Date,
        required: [true, 'please enter a valid birthday']},
    products: [ProductSchema]
}, 
{timestamps: true });

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
