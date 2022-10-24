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
    res.status(200).json(activity)
  } catch (err) {
    res.status(500).json(err)
  }
}

const createReview = async (req, res) => {
  try {
    console.log(req.body)
    req.body.owner = req.user.profile
    const activity = await Activity.findById(req.body.activity)
    delete req.body.activity
    activity.reviews.push(req.body)
    await activity.save()

  
    const newReview = activity.reviews[activity.reviews.length - 1]

    res.status(201).json(newReview)
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
  createReview,
}