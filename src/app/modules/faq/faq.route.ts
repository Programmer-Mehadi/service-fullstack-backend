import express from 'express'
import { FaqController } from './faq.controller'
import auth from '../../middlewares/auth'
import { ADMIN } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(ADMIN), FaqController.createFaq)
router.get('/get-all', auth(ADMIN), FaqController.getAll)
router.get('/get-public-all', FaqController.getPublicAll)
router.put('/status-change/:id', auth(ADMIN), FaqController.statusChange)
router.delete('/delete/:id', auth(ADMIN), FaqController.deleteFaq)
router.get('/get/:id', auth(ADMIN), FaqController.getSingleFaq)
router.put('/update/:id', auth(ADMIN), FaqController.updateFaq)
export const FaqRoutes = router
