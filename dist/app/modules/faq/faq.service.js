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
exports.FaqService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createFaqToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.create({
        data: data,
    });
    return result;
});
const getAllToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            user: true,
        },
    });
    return result;
});
const getPublicAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.findMany({
        where: {
            status: 'active',
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return result;
});
const statusChange = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.update({
        where: {
            id: id,
        },
        data: {
            status: data,
        },
    });
    return result;
});
const deleteFaq = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.delete({
        where: {
            id: id,
        },
    });
    return result;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            ques: true,
            ans: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            user: true,
        },
    });
    return result;
});
const updateFaq = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.faqs.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
exports.FaqService = {
    createFaqToDB,
    getAllToDB,
    statusChange,
    deleteFaq,
    getSingle,
    updateFaq,
    getPublicAll,
};
