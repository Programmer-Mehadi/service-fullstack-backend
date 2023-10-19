import express from 'express'
import { ServiceController } from './service.controller'
import auth from '../../middlewares/auth'
import { ADMIN } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(ADMIN), ServiceController.createData)
router.get('/get-all', auth(ADMIN), ServiceController.getAllData)
router.delete('/delete/:id', auth(ADMIN), ServiceController.deleteData)
router.get('/get/:id', ServiceController.getSingleData)
router.put('/update/:id', auth(ADMIN), ServiceController.updateData)
router.get('/get-all-list', ServiceController.getAllListData)
router.put('/status-change/:id', auth(ADMIN), ServiceController.statusChange)
router.get('/available-service', ServiceController.getAvailableService)
router.get('/upcoming-service', ServiceController.getUpcomingService)
router.get('/service-by-category/:id', ServiceController.getServiceByCategory)
router.get('/get-public-list', ServiceController.getPublicList)
export const ServiceRoutes = router
