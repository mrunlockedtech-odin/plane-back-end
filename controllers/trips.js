import { Profile } from "../models/profile.js"
import { Trip } from "../models/trip.js"

const create = async(req, res) => {
  try {
    req.body.owner = req.user.profile
    const activity = await Trip.create(req.body)
    res.status(201).json(activity)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}



export {
  create
}