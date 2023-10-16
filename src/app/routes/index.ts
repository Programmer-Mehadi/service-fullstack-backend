import express from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { UserRoutes } from '../modules/user/user.route'
import { ProfileRoutes } from '../modules/profile/profile.route'
import { FaqRoutes } from '../modules/faq/faq.route'
import { BlogRoutes } from '../modules/blog/blog.route'
import { CategoryRoutes } from '../modules/category/category.route'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
