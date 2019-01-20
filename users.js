import mongoose from 'mongoose';



const userModel = mongoose.model(

  'User',

  new mongoose.Schema({

    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: { type: String, unique: true, required: true },

    counter: { type: Integer, required: true},

  }),

);



export default userModel;
