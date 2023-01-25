import { Error, Schema, model } from 'mongoose';

import { UserObj } from './../interfaces/user';
import bcrypt from 'bcryptjs';

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema<UserObj>({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8, hide: true },
});

userSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    const user = this;
    
    bcrypt.hash(user.password, SALT_WORK_FACTOR)
      .then((hash: string) => {
        user.password = hash;
        return next();
      })
      .catch((err: Error) => {
        return next(err);
      });
  } else  {
    next();
  }
});

const User = model('User', userSchema);

module.exports = User;


// function (err: Error, hash: string) {
//   if(err) {
//     return next(err);
//   } else {
//     user.password = hash;
//     next();
//   }
// }
