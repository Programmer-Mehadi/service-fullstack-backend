import express from 'express'
import { CategoryController } from './category.controller'
import auth from '../../middlewares/auth'
import { ADMIN } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(ADMIN), CategoryController.createData)
router.get('/get-all', auth(ADMIN), CategoryController.getAllData)
router.delete('/delete/:id', auth(ADMIN), CategoryController.deleteData)
router.get('/get/:id', auth(ADMIN), CategoryController.getSingleData)
router.put('/update/:id', auth(ADMIN), CategoryController.updateData)
router.get('/get-all-list', CategoryController.getAllListData)

export const CategoryRoutes = router
