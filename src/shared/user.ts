export const ADMIN = 'admin' as string
export const USER = 'user' as string
export const SUPERADMIN = 'super_admin' as string
export const ADMIN_USER = [ADMIN, USER] as string[]
export const ADMIN_SUPERADMIN = [ADMIN, SUPERADMIN] as string[]
export const USER_SUPERADMIN = [USER, SUPERADMIN] as string[]
export const USER_ADMIN_SUPERADMIN = [
  'user',
  'admin',
  'super_admin',
] as string[]
