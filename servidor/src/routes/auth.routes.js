import { Router } from 'express'
import { verifySignup } from '../middlewares'
import * as authController from '../controllers/auth.controller'
const router = Router()


router.post('/signup', [ verifySignup.checkRolesExisted, verifySignup.checkDuplicateUserOrEmail], authController.signUp)
router.post('/signin', authController.signIn)

export default router;