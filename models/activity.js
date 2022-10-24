import mongoose from "mongoose";

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  content: String,
  recommended: Boolean
},{
  timestamps:true,
})

const activitySchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  name: {
    type:String,
    require:true
  },
  description: String,
  destination: {
    type:String,
    enum: ['Miami','Boston','Atlanta', 'Dallas'],
    require:true
  },
  timeOfDay: {
    type:String,
    enum: ['Morning', 'Afternoon','Daytime','Evening'],
    default: 'Daytime'
  },
  duration: { type: Number, default: 1},
  cost: {
    type: String,
    enum: ['$','$$','$$$','$$$$'],
    default: '$'
  },
  reviews:[reviewSchema]
},{
  timestamps: true,
})

const Activity = mongoose.model('Activity', activitySchema)

export { Activity }
