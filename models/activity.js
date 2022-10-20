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
    enum: ['Daytime', 'Afternoon', 'Evening']
  },
  duration: Number,
  cost:String,
  reviews:[reviewSchema]
},{
  timestamps: true,
})

const Activity = mongoose.model('Activity', activitySchema)

export { Activity }
