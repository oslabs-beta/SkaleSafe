import { Error, Schema, model } from 'mongoose';

import { UserObj } from './../interfaces/user';
import bcrypt from 'bcryptjs';

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const SALT_WORK_FACTOR = 10;

// add cluster...
// req.body:  {
//   grafanaPort: '3000',
//   grafanaUsername: 'sangs-username',
//   grafanaPassword: 'intern',
//   kubeviewPort: '8080',
//   username: 'johnwick'
//   }

const userSchema = new Schema<UserObj>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8, hide: true },
  // picture: { type: String},
  grafURL: { type: String, required: false },
  grafPort: { type: String, required: false },
  grafUsername: { type: String, required: false },
  grafPassword: { type: String, required: false },
  kubeviewPort: { type: String, required: false },
  customUID: { type: String, required: false },
  alertsUID: { type: String, required: false },
});

userSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    const user = this;

    bcrypt
      .hash(user.password, SALT_WORK_FACTOR)
      .then((hash: string) => {
        user.password = hash;
        return next();
      })
      .catch((err: Error) => {
        return next(err);
      });
  } else {
    next();
  }
});

const User = model('User', userSchema);

module.exports = User;
