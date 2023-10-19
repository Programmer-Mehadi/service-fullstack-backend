"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServayRoutes = void 0;
const express_1 = __importDefault(require("express"));
const survay_controller_1 = require("./survay.controller");
const router = express_1.default.Router();
router.get('/get-all', survay_controller_1.ServayController.getAll);
exports.ServayRoutes = router;
