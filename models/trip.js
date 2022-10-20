import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activityPlanSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
  date: {type: Date, required: true},
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
  activityPlans: [activityPlanSchema],
},{
  timestamps: true,
})


const Trip = mongoose.model('Trip', tripSchema)

export { Trip }