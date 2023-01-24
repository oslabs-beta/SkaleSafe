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
    bcrypt
      .hash(this.password, SALT_WORK_FACTOR)
      .then((hash: string) => {
        this.password = hash;
        return next();
      })
      .catch((err: Error) => {
        return next(err);
      });
  }
});

const User = model('User', userSchema);

module.exports = User;
