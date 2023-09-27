const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
        minlength:5
      },
      
      expenses:[
          {
              type: Schema.Types.ObjectId,
              ref:'Expenses'
          }
      ]
  
      }
    ,
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
  
  // hash user password
  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  

  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  

  userSchema.virtual('expensesCount').get(function () {
    return this.expenses.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;
  