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
exports.BlogController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const blog_service_1 = require("./blog.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const result = yield blog_service_1.BlogService.createToDB(data);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog created successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not created',
            data: null,
        });
    }
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getAllToDB();
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not retrieved',
            data: null,
        });
    }
}));
const getPublicList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getPublicListToDB();
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not retrieved',
            data: null,
        });
    }
}));
const getLatestBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getLatestBlogToDB();
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not retrieved',
            data: null,
        });
    }
}));
const statusChange = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    const { status } = req.body;
    const result = yield blog_service_1.BlogService.statusChange((_h = req === null || req === void 0 ? void 0 : req.params) === null || _h === void 0 ? void 0 : _h.id, status);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog updated successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not updated',
            data: null,
        });
    }
}));
const deleteToDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j;
    const result = yield blog_service_1.BlogService.deleteToDB((_j = req === null || req === void 0 ? void 0 : req.params) === null || _j === void 0 ? void 0 : _j.id);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog deleted successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not deleted',
            data: null,
        });
    }
}));
const getSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k;
    const result = yield blog_service_1.BlogService.getSingle((_k = req === null || req === void 0 ? void 0 : req.params) === null || _k === void 0 ? void 0 : _k.id);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not retrieved',
            data: null,
        });
    }
});
const getPublicSingle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _l;
    const result = yield blog_service_1.BlogService.getPublicSingleToDB((_l = req === null || req === void 0 ? void 0 : req.params) === null || _l === void 0 ? void 0 : _l.id);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog retrieved successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not retrieved',
            data: null,
        });
    }
});
const update = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _m, _o, _p, _q, _r, _s, _t;
    const data = Object.assign({}, req.body);
    if ('data' in ((_m = req === null || req === void 0 ? void 0 : req.files) === null || _m === void 0 ? void 0 : _m.image)) {
        const base64Data = (_q = (_p = (_o = req === null || req === void 0 ? void 0 : req.files) === null || _o === void 0 ? void 0 : _o.image) === null || _p === void 0 ? void 0 : _p.data) === null || _q === void 0 ? void 0 : _q.toString('base64');
        if (base64Data) {
            data.image = `data:${(_s = (_r = req === null || req === void 0 ? void 0 : req.files) === null || _r === void 0 ? void 0 : _r.image) === null || _s === void 0 ? void 0 : _s.mimetype};base64,` + base64Data;
        }
        else {
            data.image = '';
            delete data.image;
        }
    }
    else {
        data.image = '';
        delete data.image;
    }
    const result = yield blog_service_1.BlogService.update((_t = req === null || req === void 0 ? void 0 : req.params) === null || _t === void 0 ? void 0 : _t.id, data);
    if (result) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog updated successfully',
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Blog Not updated',
            data: null,
        });
    }
}));
exports.BlogController = {
    create,
    getAll,
    statusChange,
    deleteToDB,
    getSingle,
    update,
    getPublicList,
    getPublicSingle,
    getLatestBlog,
};
