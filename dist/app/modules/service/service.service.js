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
exports.ServiceService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.create({
        data: data,
    });
    return result;
});
const getAllToDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        where: {
            title: {
                contains: query.name,
                mode: 'insensitive',
            },
            categoryId: {
                contains: query.category,
            },
            location: {
                contains: query.location,
                mode: 'insensitive',
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            id: true,
            title: true,
            image: true,
            description: true,
            availability: true,
            upcoming: true,
            price: true,
            user: {
                select: {
                    name: true,
                },
            },
            location: true,
            category: {
                select: {
                    title: true,
                },
            },
            publicationDate: true,
        },
    });
    return result;
});
const getPublicListToDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        where: {
            title: {
                contains: query.name,
                mode: 'insensitive',
            },
            categoryId: {
                contains: query.category,
            },
            location: {
                contains: query.location,
                mode: 'insensitive',
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            id: true,
            title: true,
            image: true,
            description: true,
            availability: true,
            upcoming: true,
            price: true,
            user: {
                select: {
                    name: true,
                },
            },
            location: true,
            category: {
                select: {
                    title: true,
                },
            },
            publicationDate: true,
        },
    });
    return result;
});
const getAllListToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            id: true,
            title: true,
            image: true,
        },
    });
    return result;
});
const deleteToDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.delete({
        where: {
            id: id,
        },
    });
    return result;
});
const getSingleToDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            title: true,
            image: true,
            description: true,
            availability: true,
            location: true,
            features: true,
            price: true,
            upcoming: true,
            category: {
                select: {
                    title: true,
                    id: true,
                },
            },
        },
    });
    return result;
});
const updateToDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
const statusChange = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.update({
        where: {
            id: id,
        },
        data: {
            availability: data,
        },
    });
    return result;
});
const getAvailableService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        where: {
            availability: 'Available',
            upcoming: {
                not: 'true',
            },
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
            location: true,
            category: {
                select: {
                    title: true,
                },
            },
        },
    });
    return result;
});
const getUpcomingService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        where: {
            upcoming: 'true',
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
            location: true,
            category: {
                select: {
                    title: true,
                },
            },
        },
    });
    return result;
});
const getServiceByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        where: {
            categoryId: id,
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
            location: true,
            category: {
                select: {
                    title: true,
                },
            },
        },
    });
    return result;
});
exports.ServiceService = {
    createToDB,
    getAllToDB,
    deleteToDB,
    getSingleToDB,
    updateToDB,
    getAllListToDB,
    statusChange,
    getAvailableService,
    getUpcomingService,
    getServiceByCategory,
    getPublicListToDB,
};
