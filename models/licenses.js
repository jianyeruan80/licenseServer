var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
      address: String,
      city: String,
      state: String,
      zipcode: String,
      description:String
});
var licensesSchema = new mongoose.Schema({ 
    storeName:String,
    contact:String,
    email:String,
    phone:String,
    key:String,
    activeKey:String,
    merchantId:String,
    pcKey:String,
    month:Number,
    createdAt:Date,
    delay:{type:Number,default:7},
    operator:{
     id:{type: mongoose.Schema.Types.ObjectId, ref: 'users' },
     user:String
    },
    startDate:Date,
    expires:Date,
    type:{type: String, enum: ['Normal', 'Trial'],default:'Normal'},
    status:{type:Boolean,default:true}

})
var licensesSchema = new mongoose.Schema({ 
    licenseKey:[licensesSchema],
    newKey:String,
    merchantId:String,
    email:String,
    phone:String,
    contact:String,
    storeName:String,
    addressInfo:addressSchema,
    description:String,

 });

licensesSchema.index({merchantId:1}, { unique: true,sparse:true});
module.exports = mongoose.model('licenses', licensesSchema);