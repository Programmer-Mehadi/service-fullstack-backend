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
exports.BookingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.createMany({
        data: data,
    });
    return result;
});
const getAllToDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if ((user === null || user === void 0 ? void 0 : user.role) == 'admin') {
        const result = yield prisma_1.default.booking.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                price: true,
                time: true,
                date: true,
                sameId: true,
                service: {
                    select: {
                        title: true,
                    },
                },
                user: {
                    select: {
                        name: true,
                    },
                },
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return result;
    }
    else {
        const result = yield prisma_1.default.booking.findMany({
            where: {
                userId: user === null || user === void 0 ? void 0 : user.userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            select: {
                id: true,
                price: true,
                time: true,
                date: true,
                sameId: true,
                status: true,
                service: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
        });
        return result;
    }
});
const deleteToDB = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.delete({
        where: {
            id: id,
            userId: userId,
        },
    });
    return result;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            user: {
                select: {
                    name: true,
                    profileImg: true,
                },
            },
            service: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });
    return result;
});
const updateToDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
const statusChangeToDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.update({
        where: {
            id: id,
        },
        data: {
            status: data,
        },
    });
    return result;
});
exports.BookingService = {
    createToDB,
    getAllToDB,
    deleteToDB,
    getSingle,
    updateToDB,
    statusChangeToDB,
};
