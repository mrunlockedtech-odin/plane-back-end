import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activityPlanSchema = new Schema({
  //  owner: { type: Schema.Types.ObjectId, ref: 'Profile' }, //! this to be removed once we are good with testing, I believe it is not needed since the tripOwner is the only one that will create actvity plans.
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