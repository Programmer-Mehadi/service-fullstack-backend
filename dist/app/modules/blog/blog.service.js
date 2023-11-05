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
exports.BlogService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.create({
        data: data,
    });
    return result;
});
const getAllToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            user: true,
        },
    });
    return result;
});
const getPublicListToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findMany({
        where: {
            status: 'active',
        },
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            user: {
                select: {
                    profileImg: true,
                    name: true,
                },
            },
        },
    });
    return result;
});
const getLatestBlogToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findMany({
        where: {
            status: 'active',
        },
        orderBy: {
            updatedAt: 'desc',
        },
        include: {
            user: {
                select: {
                    profileImg: true,
                    name: true,
                },
            },
        },
        take: 4,
    });
    return result;
});
const statusChange = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.update({
        where: {
            id: id,
        },
        data: {
            status: data,
        },
    });
    return result;
});
const deleteToDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.delete({
        where: {
            id: id,
        },
    });
    return result;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const getPublicSingleToDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findUnique({
        where: {
            id: id,
        },
        include: {
            user: {
                select: {
                    profileImg: true,
                    name: true,
                },
            },
        },
    });
    return result;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
exports.BlogService = {
    createToDB,
    getAllToDB,
    statusChange,
    deleteToDB,
    getSingle,
    update,
    getPublicListToDB,
    getPublicSingleToDB,
    getLatestBlogToDB,
};
