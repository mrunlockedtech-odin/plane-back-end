import { Profile } from "../models/profile.js"
import { Activity} from "../models/activity.js"


const create = async(req,res) => {
  try {
    req.body.owner = req.user.profile
    const activity = await Activity.create(req.body)
    res.status(201).json(activity)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const activity = await Activity.find({})
      .populate('owner')
    res.status(200).json(activity)
  } catch (err) {
    res.status(500).json(err)
  }
}

const show = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id)
      .populate('owner')
    res.status(200).json(activity)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('owner')
    res.status(200).json(activity)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.activities.remove({ _id: req.params.id })
    await profile.save()
    res.status(200).json(activity)
  } catch (err) {
    res.status(500).json(err)
  }
}


export {
  create,
  index, 
  show,
  update,
  deleteActivity as delete,
  
}