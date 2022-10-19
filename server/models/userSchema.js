// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
// eslint-disable-next-line no-undef
const bcrypt = require('bcrypt');
const saltRounds = 10;
mongoose
  .connect('mongodb://localhost:27017/eCommerce', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    //useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));
  const userSchema = new mongoose.Schema(
    {
      userID: {
        type: String,
        unique: true,
        required: [true, 'Required field'],
      },
      name: {
        type: String,
        required: [true, 'Required field'],
      },
      password: {
        type: String,
        required: [true, 'Required field'],
      },
      gender: {
        type: String,
        required: [true, 'Required field'],
      },
      dob: {
        type: Date,
        required: [true, 'Required field'],
      },
      email: {
        type: String,
        required: [true, 'Required field'],
      },
      mobileNumber: {
        type: String,
        required: [true, 'Required field'],
      },
      pincode: {
        type: Number,
        required: [true, 'Required field'],
      },
      city: {
        type: String,
        required: [true, 'Required field'],
      },
      state: {
        type: String,
        required: [true, 'Required field'],
      },
      country: {
        type: String,
        required: [true, 'Required field'],
      },
    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true,
      },
    }
  );

  userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });
  const UserModel = mongoose.model('user', userSchema);
  // eslint-disable-next-line no-undef
  module.exports = UserModel;