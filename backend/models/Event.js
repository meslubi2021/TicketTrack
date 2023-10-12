const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const EventSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  title:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
    
  },
  location:{
    type:String,
    require:true
    
  },
  date_time:{
    type:String
  },
  price:{
    type:Number,
    default: 99
  },
  image:{
    type:String
  }
 
});
module.exports = mongoose.model('Event', EventSchema)