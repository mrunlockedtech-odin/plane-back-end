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
export {create, index, show}