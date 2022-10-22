import { Router } from "express";
import * as activityCtrl from '../controllers/activities.js'
import * as tripCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()



// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

// GET api/activities/  index of all activities
router.get('/', checkAuth, activityCtrl.index)
router.get('/:id', checkAuth, activityCtrl.show)

router.post('/',checkAuth, activityCtrl.create) 
router.post('/:id/reviews', checkAuth, activityCtrl.createReview)

// POST from an activities details, add entry to Trip.activityPlans array
router.post('/:id/activity-plan', checkAuth, tripCtrl.createActivityPlan)

router.put('/:id', checkAuth, activityCtrl.update)

router.delete('/:id', checkAuth, activityCtrl.delete)

export { router }
