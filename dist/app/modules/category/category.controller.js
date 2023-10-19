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
exports.CategoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const category_service_1 = require("./category.service");
const createData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const data = Object.assign(Object.assign({}, req.body), { authorID: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId });
    if ('data' in ((_b = req === null || req === void 0 ? void 0 : req.files) === null || _b === void 0 ? void 0 : _b.image)) {
        const base64Data = (_e = (_d = (_c = req === null || req === void 0 ? void 0 : req.files) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.toString('base64');
        if (base64Data) {
            data.image = `data:${(_g = (_f = req === null || req === void 0 ? void 0 : req.files) === null || _f === void 0 ? void 0 : _f.image) === null || _g === void 0 ? void 0 : _g.mimetype};base64,` + base64Data;
        }
        else {
            data.image = '';
        }
    }
    else {
        data.image = '';
    }
    const result = yield category_service_1.CategoryService.createToDB(data);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category created successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: false,
            message: 'Category Not created',
            data: null,
        });
    }
}));
const getAllData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.getAllToDB();
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category Not retrieved',
            data: null,
        });
    }
}));
const getAllListData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.getAllListToDB();
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category Not retrieved',
            data: [],
        });
    }
}));
const deleteData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    const result = yield category_service_1.CategoryService.deleteToDB((_h = req === null || req === void 0 ? void 0 : req.params) === null || _h === void 0 ? void 0 : _h.id);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category deleted successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category Not deleted',
            data: null,
        });
    }
}));
const getSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j;
    const result = yield category_service_1.CategoryService.getSingleToDB((_j = req === null || req === void 0 ? void 0 : req.params) === null || _j === void 0 ? void 0 : _j.id);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category Not retrieved',
            data: null,
        });
    }
});
const updateData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k, _l, _m, _o, _p, _q, _r;
    const data = Object.assign({}, req.body);
    if ('data' in ((_k = req === null || req === void 0 ? void 0 : req.files) === null || _k === void 0 ? void 0 : _k.image)) {
        const base64Data = (_o = (_m = (_l = req === null || req === void 0 ? void 0 : req.files) === null || _l === void 0 ? void 0 : _l.image) === null || _m === void 0 ? void 0 : _m.data) === null || _o === void 0 ? void 0 : _o.toString('base64');
        if (base64Data) {
            data.image = `data:${(_q = (_p = req === null || req === void 0 ? void 0 : req.files) === null || _p === void 0 ? void 0 : _p.image) === null || _q === void 0 ? void 0 : _q.mimetype};base64,` + base64Data;
        }
        else {
            data.image = '';
            delete data.image;
        }
    }
    else {
        delete data.image;
    }
    const result = yield category_service_1.CategoryService.updateToDB((_r = req === null || req === void 0 ? void 0 : req.params) === null || _r === void 0 ? void 0 : _r.id, data);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category updated successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Category Not updated',
            data: null,
        });
    }
}));
exports.CategoryController = {
    createData,
    getAllData,
    deleteData,
    getSingleData,
    updateData,
    getAllListData,
};
