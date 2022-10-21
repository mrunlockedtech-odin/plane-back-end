import { Router } from "express";
import * as activityCtrl from '../controllers/activities.js'
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

router.put('/:id', checkAuth, activityCtrl.update)

router.delete('/:id', checkAuth, activityCtrl.delete)

export { router }
