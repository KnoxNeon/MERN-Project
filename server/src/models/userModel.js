const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const { defaultImagePath } = require('../secret');

const userSchema = new Schema({

  name:{
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    minlength: [3,'Too short'],
    maxlength: [31,'Must not exceed 31 characters'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6,'Too short'],
    set: (v) =>  bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },

   image: {
    type: String,
    defaultImagePath,
    },
  
  address: {
    type: String,
    required: [true, 'Address is required'],
    },

  phone: {
    type: String,
    required: [true, 'Phone Number is required'],
    },
    
  isAdmin: {
    type: Boolean,
    default: false,
    },

  isBanned: {
    type: Boolean,
    default: false,
    },
    
    
  }, {timestamps: true}
);

const User = model('Users', userSchema)


module.exports = User;