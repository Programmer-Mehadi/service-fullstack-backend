"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/blog/blog.route");
const booking_route_1 = require("../modules/booking/booking.route");
const category_route_1 = require("../modules/category/category.route");
const faq_route_1 = require("../modules/faq/faq.route");
const feedback_route_1 = require("../modules/feedback/feedback.route");
const profile_route_1 = require("../modules/profile/profile.route");
const review_route_1 = require("../modules/review/review.route");
const service_route_1 = require("../modules/service/service.route");
const survay_route_1 = require("../modules/survay/survay.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/profile',
        route: profile_route_1.ProfileRoutes,
    },
    {
        path: '/faq',
        route: faq_route_1.FaqRoutes,
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/category',
        route: category_route_1.CategoryRoutes,
    },
    {
        path: '/service',
        route: service_route_1.ServiceRoutes,
    },
    {
        path: '/feedback',
        route: feedback_route_1.FeedbackRoutes,
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoutes,
    },
    {
        path: '/booking',
        route: booking_route_1.BookingRoutes,
    },
    {
        path: '/survay',
        route: survay_route_1.ServayRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
