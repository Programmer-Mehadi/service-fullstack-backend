"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRoutes = void 0;
const express_1 = __importDefault(require("express"));
const feedback_controller_1 = require("./feedback.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.USER), feedback_controller_1.FeedbackController.createData);
router.get('/get-all', (0, auth_1.default)(...user_1.ADMIN_USER), feedback_controller_1.FeedbackController.getAll);
router.delete('/delete/:id', (0, auth_1.default)(user_1.USER), feedback_controller_1.FeedbackController.deleteData);
router.get('/get/:id', (0, auth_1.default)(...user_1.ADMIN_USER), feedback_controller_1.FeedbackController.getSingleData);
router.put('/update/:id', (0, auth_1.default)(user_1.USER), feedback_controller_1.FeedbackController.updateData);
exports.FeedbackRoutes = router;
