import mongoose from 'mongoose'

const Schema = mongoose.Schema


const tripSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  name: {
    type:String,
    require:true
  },
  private: {
    type:Boolean,
    required:true,
  },
  startDate: {
    type:Number,
    required:true,
  },
  endDate: {
    type:Number,
    required:true,
  },
  
},{
  timestamps: true,
})


const Trip = mongoose.model('Trip', tripSchema)

export { Trip }