"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ADMIN_SUPERADMIN = exports.USER_SUPERADMIN = exports.ADMIN_SUPERADMIN = exports.ADMIN_USER = exports.SUPERADMIN = exports.USER = exports.ADMIN = void 0;
exports.ADMIN = 'admin';
exports.USER = 'user';
exports.SUPERADMIN = 'super_admin';
exports.ADMIN_USER = [exports.ADMIN, exports.USER];
exports.ADMIN_SUPERADMIN = [exports.ADMIN, exports.SUPERADMIN];
exports.USER_SUPERADMIN = [exports.USER, exports.SUPERADMIN];
exports.USER_ADMIN_SUPERADMIN = [
    'user',
    'admin',
    'super_admin',
];
