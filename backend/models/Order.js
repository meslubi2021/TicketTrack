const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const OrderSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  event:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'Event'
  },
  status:{
    type:String,
    default: "false"
  }
 
});
module.exports = mongoose.model('Order', OrderSchema)