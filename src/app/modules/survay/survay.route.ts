import express from 'express'
import { ServayController } from './survay.controller'

const router = express.Router()

router.get('/get-all', ServayController.getAll)

export const ServayRoutes = router
