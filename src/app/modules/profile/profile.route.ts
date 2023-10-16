import express from 'express'
import { ProfileController } from './profile.controller'
import auth from '../../middlewares/auth'
import { USER_ADMIN_SUPERADMIN } from '../../../shared/user'

const router = express.Router()

router.get(
  '/get-info',
  auth(...USER_ADMIN_SUPERADMIN),
  ProfileController.getInfo
)
router.get(
  '/get-edit-info',
  auth(...USER_ADMIN_SUPERADMIN),
  ProfileController.getEditInfo
)
router.post(
  '/edit-info',
  auth(...USER_ADMIN_SUPERADMIN),
  ProfileController.editInfo
)
export const ProfileRoutes = router
