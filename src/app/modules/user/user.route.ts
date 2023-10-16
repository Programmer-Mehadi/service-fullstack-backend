import express from 'express'
import { UserController } from './user.controller'
import auth from '../../middlewares/auth'
import { ADMIN_SUPERADMIN } from '../../../shared/user'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/user-register',
  validateRequest(UserValidation.CreateUser),
  UserController.createUser
)
router.post(
  '/create-admin',
  auth(...ADMIN_SUPERADMIN),
  validateRequest(UserValidation.CreateUser),
  UserController.createAdmin
)
router.get('/get-all', auth(...ADMIN_SUPERADMIN), UserController.getAllUser)
router.get(
  '/admin/get/:id',
  auth(...ADMIN_SUPERADMIN),
  UserController.getAdminUser
)
router.post(
  '/role-change/:id',
  auth(...ADMIN_SUPERADMIN),
  UserController.roleChange
)
export const UserRoutes = router
