import { Profile } from "../models/profile.js"
import { Trip } from "../models/trip.js"
import { Activity } from "../models/activity.js"

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile
    const trip = await Trip.create(req.body)
    res.status(201).json(trip)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const trips = await Trip.find({})
      .populate('owner')
      .sort({ createdAt: 'desc' })
    res.status(200).json(trips)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id)
      .populate('owner')
    res.status(200).json(trip)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('owner')
    res.status(200).json(trip)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id)
    res.status(200).json(trip)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addToTrip = async (req, res) => {
  try {
    // const activity = await Activity.findById(req.body._id)
    // const trip = await Trip.findById(req.body.trip)
    console.log("Trip", req.body)
    res.status(200).json()
  } catch (error) {
    res.status(500).json(error)
  }
}


export {
  create,
  index,
  show,
  update,
  deleteTrip as delete,
  addToTrip
}