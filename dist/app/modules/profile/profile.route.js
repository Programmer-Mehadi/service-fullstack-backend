"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("./profile.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const router = express_1.default.Router();
router.get('/get-info', (0, auth_1.default)(...user_1.USER_ADMIN_SUPERADMIN), profile_controller_1.ProfileController.getInfo);
router.get('/get-edit-info', (0, auth_1.default)(...user_1.USER_ADMIN_SUPERADMIN), profile_controller_1.ProfileController.getEditInfo);
router.post('/edit-info', (0, auth_1.default)(...user_1.USER_ADMIN_SUPERADMIN), profile_controller_1.ProfileController.editInfo);
exports.ProfileRoutes = router;
