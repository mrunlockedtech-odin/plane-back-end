import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activityPlanSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
  date: {type: String, required: true},
  note: {type: String}
}, {
  timestamps: true
})

const tripSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  name: {
    type:String,
    required:true,
  },
  private: {
    type:Boolean,
    default:true,
  },
  startDate: {
    type:String,
  },
  endDate: {
    type:String,
  },
  activityPlans: [activityPlanSchema],
},{
  timestamps: true,
})


const Trip = mongoose.model('Trip', tripSchema)

export { Trip }