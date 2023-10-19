"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.USER), booking_controller_1.BookingController.createData);
router.get('/get-all', (0, auth_1.default)(...user_1.ADMIN_USER), booking_controller_1.BookingController.getAll);
router.delete('/delete/:id', (0, auth_1.default)(user_1.USER), booking_controller_1.BookingController.deleteData);
router.get('/get/:id', (0, auth_1.default)(...user_1.ADMIN_USER), booking_controller_1.BookingController.getSingleData);
router.put('/update/:id', (0, auth_1.default)(user_1.USER), booking_controller_1.BookingController.updateData);
router.put('/status-change/:id', (0, auth_1.default)(...user_1.ADMIN_USER), booking_controller_1.BookingController.statusChange);
exports.BookingRoutes = router;
