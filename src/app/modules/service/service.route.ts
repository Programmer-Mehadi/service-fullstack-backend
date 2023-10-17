import express from 'express'
import { ServiceController } from './service.controller'
import auth from '../../middlewares/auth'
import { ADMIN } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(ADMIN), ServiceController.createData)
router.get('/get-all', auth(ADMIN), ServiceController.getAllData)
router.delete('/delete/:id', auth(ADMIN), ServiceController.deleteData)
router.get('/get/:id', auth(ADMIN), ServiceController.getSingleData)
router.put('/update/:id', auth(ADMIN), ServiceController.updateData)
router.get('/get-all-list', auth(ADMIN), ServiceController.getAllListData)
router.put('/status-change/:id', auth(ADMIN), ServiceController.statusChange)
export const ServiceRoutes = router
