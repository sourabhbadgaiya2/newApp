const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minLength: [3, 'A minimum 3 text is required'],
      maxLength: [50, 'A maximum 50 text is required'],
    },
    lastname: {
      type: String,
      required: [true, 'LastName is required'],
      trim: true,
      minLength: [3, 'A minimum 3 text is required'],
      maxLength: [50, 'A maximum 50 text is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
      minLength: [6, 'A minimum 3 text is required'],
      maxLength: [15, 'A maximum 50 text is required'],
      select: false,
    },
    contact: {
      type: String,
      required: [true, 'contact is required'],
      trim: true,
      minLength: [3, 'A minimum 3 text is required'],
      maxLength: [50, 'A maximum 50 text is required'],
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: [true, 'gender is required'],
    },
  },
  { timestamps: true }
);
1;

module.exports = mongoose.model('user', userSchema);
