"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoutes = void 0;
const express_1 = __importDefault(require("express"));
const faq_controller_1 = require("./faq.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../shared/user");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ADMIN), faq_controller_1.FaqController.createFaq);
router.get('/get-all', (0, auth_1.default)(user_1.ADMIN), faq_controller_1.FaqController.getAll);
router.get('/get-public-all', faq_controller_1.FaqController.getPublicAll);
router.put('/status-change/:id', (0, auth_1.default)(user_1.ADMIN), faq_controller_1.FaqController.statusChange);
router.delete('/delete/:id', (0, auth_1.default)(user_1.ADMIN), faq_controller_1.FaqController.deleteFaq);
router.get('/get/:id', (0, auth_1.default)(user_1.ADMIN), faq_controller_1.FaqController.getSingleFaq);
router.put('/update/:id', (0, auth_1.default)(user_1.ADMIN), faq_controller_1.FaqController.updateFaq);
exports.FaqRoutes = router;
