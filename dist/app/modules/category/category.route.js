"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ADMIN), category_controller_1.CategoryController.createData);
router.get('/get-all', (0, auth_1.default)(user_1.ADMIN), category_controller_1.CategoryController.getAllData);
router.delete('/delete/:id', (0, auth_1.default)(user_1.ADMIN), category_controller_1.CategoryController.deleteData);
router.get('/get/:id', (0, auth_1.default)(user_1.ADMIN), category_controller_1.CategoryController.getSingleData);
router.put('/update/:id', (0, auth_1.default)(user_1.ADMIN), category_controller_1.CategoryController.updateData);
router.get('/get-all-list', category_controller_1.CategoryController.getAllListData);
exports.CategoryRoutes = router;
