import express from 'express'
import { BlogController } from './blog.controller'
import auth from '../../middlewares/auth'
import { ADMIN } from '../../../shared/user'

const router = express.Router()

router.post('/', auth(ADMIN), BlogController.create)
router.get('/get-all', auth(ADMIN), BlogController.getAll)
router.put('/status-change/:id', auth(ADMIN), BlogController.statusChange)
router.delete('/delete/:id', auth(ADMIN), BlogController.deleteToDB)
router.get('/get/:id', auth(ADMIN), BlogController.getSingle)
router.put('/update/:id', auth(ADMIN), BlogController.update)
router.get('/get-public-list', BlogController.getPublicList)
router.get('/latest-blog', BlogController.getLatestBlog)
router.get('/get-public-single/:id', BlogController.getPublicSingle)

export const BlogRoutes = router
