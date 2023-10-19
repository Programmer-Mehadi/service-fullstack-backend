"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/user-register', (0, validateRequest_1.default)(user_validation_1.UserValidation.CreateUser), user_controller_1.UserController.createUser);
router.post('/create-admin', (0, auth_1.default)(...user_1.ADMIN_SUPERADMIN), (0, validateRequest_1.default)(user_validation_1.UserValidation.CreateUser), user_controller_1.UserController.createAdmin);
router.get('/get-all', (0, auth_1.default)(...user_1.ADMIN_SUPERADMIN), user_controller_1.UserController.getAllUser);
router.get('/admin/get/:id', (0, auth_1.default)(...user_1.ADMIN_SUPERADMIN), user_controller_1.UserController.getAdminUser);
router.post('/role-change/:id', (0, auth_1.default)(...user_1.ADMIN_SUPERADMIN), user_controller_1.UserController.roleChange);
exports.UserRoutes = router;
