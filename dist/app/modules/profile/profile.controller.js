"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const profile_service_1 = require("./profile.service");
const getInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield profile_service_1.ProfileService.getInfo((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Profile data retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'No profile data found',
            data: null,
        });
    }
});
const getEditInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const result = yield profile_service_1.ProfileService.getEditInfo((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.userId);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Profile data retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'No profile data found',
            data: null,
        });
    }
});
const editInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e, _f, _g, _h, _j;
    const data = req.body;
    if ('data' in ((_c = req === null || req === void 0 ? void 0 : req.files) === null || _c === void 0 ? void 0 : _c.profileImg)) {
        const base64Data = (_f = (_e = (_d = req === null || req === void 0 ? void 0 : req.files) === null || _d === void 0 ? void 0 : _d.profileImg) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.toString('base64');
        data.profileImg =
            `data:${(_h = (_g = req === null || req === void 0 ? void 0 : req.files) === null || _g === void 0 ? void 0 : _g.profileImg) === null || _h === void 0 ? void 0 : _h.mimetype};base64,` + base64Data;
    }
    else {
        delete data.profileImg;
    }
    const result = yield profile_service_1.ProfileService.editInfo((_j = req === null || req === void 0 ? void 0 : req.user) === null || _j === void 0 ? void 0 : _j.userId, data);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Profile data updated successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'No profile data found',
            data: null,
        });
    }
});
exports.ProfileController = {
    getInfo,
    getEditInfo,
    editInfo,
};
