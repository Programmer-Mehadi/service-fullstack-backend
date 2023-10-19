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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const user_service_1 = require("./user.service");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getAlluser();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Users retrieved successfully',
        data: result,
    });
});
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getSingleUser(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User fetched successfully',
        data: result,
    });
}));
const getAdminUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getAdminUser(req.params.id);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User fetched successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'No User Found',
            data: result,
        });
    }
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.updateUser(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User updated successfully',
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.deleteUser(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User deleted successfully',
        data: result,
    });
}));
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const data = req.body;
    if ('data' in ((_a = req.files) === null || _a === void 0 ? void 0 : _a.profileImg)) {
        const base64Data = (_d = (_c = (_b = req === null || req === void 0 ? void 0 : req.files) === null || _b === void 0 ? void 0 : _b.profileImg) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.toString('base64');
        data.profileImg =
            `data:${(_f = (_e = req === null || req === void 0 ? void 0 : req.files) === null || _e === void 0 ? void 0 : _e.profileImg) === null || _f === void 0 ? void 0 : _f.mimetype};base64,` + base64Data;
    }
    else {
        data.profileImg = '';
    }
    const result = yield user_service_1.UserService.createUser(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created successfully',
        data: result,
    });
}));
const createAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j, _k, _l, _m;
    const data = req.body;
    if ('data' in ((_g = req.files) === null || _g === void 0 ? void 0 : _g.profileImg)) {
        const base64Data = (_k = (_j = (_h = req === null || req === void 0 ? void 0 : req.files) === null || _h === void 0 ? void 0 : _h.profileImg) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.toString('base64');
        if (base64Data) {
            data.profileImg =
                `data:${(_m = (_l = req === null || req === void 0 ? void 0 : req.files) === null || _l === void 0 ? void 0 : _l.profileImg) === null || _m === void 0 ? void 0 : _m.mimetype};base64,` + base64Data;
        }
        else {
            data.profileImg = '';
        }
    }
    else {
        data.profileImg = '';
    }
    const result = yield user_service_1.UserService.createAdmin(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
}));
const roleChange = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.roleChange(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Role changed successfully',
        data: result,
    });
}));
exports.UserController = {
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser,
    createAdmin,
    roleChange,
    getAdminUser,
};
