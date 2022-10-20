import { Router } from "express";
import * as activityCtrl from '../controllers/activities.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()



// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/',checkAuth,activityCtrl.create)

export { router }
