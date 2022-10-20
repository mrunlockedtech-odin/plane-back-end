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

export {create, }