import express from 'express'
import { ReviewController } from './review.controller'
import auth from '../../middlewares/auth'
import { ADMIN_USER, USER } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(USER), ReviewController.createData)
router.get('/get-all', auth(...ADMIN_USER), ReviewController.getAll)
router.delete('/delete/:id', auth(USER), ReviewController.deleteData)
router.get('/get/:id', auth(...ADMIN_USER), ReviewController.getSingleData)
router.put('/update/:id', auth(USER), ReviewController.updateData)
router.get('/get-all-by-service/:id', ReviewController.getAllByService)
export const ReviewRoutes = router
