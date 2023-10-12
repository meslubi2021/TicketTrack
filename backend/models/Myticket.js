const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const MyticketSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  Event:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Event'
  },
  title:{
    type:mongoose.Schema.Types.String,
    ref:'Event'
  },
  description:{
    type:mongoose.Schema.Types.String,
    ref:'Event'
  },
  location:{
    type:mongoose.Schema.Types.String,
    ref:'Event'
    
  },
  date_time:{
    type:mongoose.Schema.Types.String,
    ref:'Event'
  },
  payment:{
    type:mongoose.Schema.Types.String,
    ref:'Order'
  }
 
});
module.exports = mongoose.model('ticket', MyticketSchema)