import mongoose from 'mongoose'

const Schema = mongoose.Schema


const tripSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  name: {
    type:String,
    required:true,
  },
  private: {
    type:Boolean,
    default:true,
    required:true,
  },
  startDate: {
    type:Date,
    required:true,
  },
  endDate: {
    type:Date,
    required:true,
  },
  
},{
  timestamps: true,
})


const Trip = mongoose.model('Trip', tripSchema)

export { Trip }