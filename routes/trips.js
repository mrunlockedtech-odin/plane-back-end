import { Router } from "express";
import * as tripCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()



// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, tripCtrl.create)
router.get('/', checkAuth, tripCtrl.index)
router.get('/:id', checkAuth, tripCtrl.show)
router.put('/:id', checkAuth, tripCtrl.update)
router.delete('/:id', checkAuth, tripCtrl.delete)
router.delete('/:id/activity-plan/:activityPlanId', checkAuth, tripCtrl.deleteActivityPlan)

export { router }
