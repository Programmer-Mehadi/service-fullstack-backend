import express from 'express'
import { FeedbackController } from './feedback.controller'
import auth from '../../middlewares/auth'
import { ADMIN, ADMIN_USER, USER } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(USER), FeedbackController.createData)
router.get('/get-all', auth(...ADMIN_USER), FeedbackController.getAll)
router.delete('/delete/:id', auth(USER), FeedbackController.deleteData)
router.get('/get/:id', auth(...ADMIN_USER), FeedbackController.getSingleData)
router.put('/update/:id', auth(USER), FeedbackController.updateData)

export const FeedbackRoutes = router
