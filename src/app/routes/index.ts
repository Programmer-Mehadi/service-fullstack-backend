import express from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { BlogRoutes } from '../modules/blog/blog.route'
import { BookingRoutes } from '../modules/booking/booking.route'
import { CategoryRoutes } from '../modules/category/category.route'
import { FaqRoutes } from '../modules/faq/faq.route'
import { FeedbackRoutes } from '../modules/feedback/feedback.route'
import { ProfileRoutes } from '../modules/profile/profile.route'
import { ReviewRoutes } from '../modules/review/review.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { ServayRoutes } from '../modules/survay/survay.route'
import { UserRoutes } from '../modules/user/user.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/faq',
    route: FaqRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },
  {
    path: '/feedback',
    route: FeedbackRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
  {
    path: '/survay',
    route: ServayRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
