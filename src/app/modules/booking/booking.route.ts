import express from 'express'
import { BookingController } from './booking.controller'
import auth from '../../middlewares/auth'
import { ADMIN_USER, USER } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(USER), BookingController.createData)
router.get('/get-all', auth(...ADMIN_USER), BookingController.getAll)
router.delete('/delete/:id', auth(USER), BookingController.deleteData)
router.get('/get/:id', auth(...ADMIN_USER), BookingController.getSingleData)
router.put('/update/:id', auth(USER), BookingController.updateData)
router.put(
  '/status-change/:id',
  auth(...ADMIN_USER),
  BookingController.statusChange
)
export const BookingRoutes = router
