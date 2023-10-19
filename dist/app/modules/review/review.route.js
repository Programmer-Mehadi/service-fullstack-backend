"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("./review.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.USER), review_controller_1.ReviewController.createData);
router.get('/get-all', (0, auth_1.default)(...user_1.ADMIN_USER), review_controller_1.ReviewController.getAll);
router.delete('/delete/:id', (0, auth_1.default)(user_1.USER), review_controller_1.ReviewController.deleteData);
router.get('/get/:id', (0, auth_1.default)(...user_1.ADMIN_USER), review_controller_1.ReviewController.getSingleData);
router.put('/update/:id', (0, auth_1.default)(user_1.USER), review_controller_1.ReviewController.updateData);
router.get('/get-all-by-service/:id', review_controller_1.ReviewController.getAllByService);
exports.ReviewRoutes = router;
