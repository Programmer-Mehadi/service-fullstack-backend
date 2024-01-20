/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma'

const getAlluser = async () => {
  const result = await prisma.user.findMany({
    where: {
      role: {
        not: 'user',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  })
  return result
}
const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  })
  return result
}
const getAdminUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  })
  return result
}

const updateUser = async (id: string, data: any) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id: id,
    },
  })
  return result
}

const createUser = async (data: any) => {
  const result = await prisma.user.create({
    data: data,
  })
  return result
}
const createAdmin = async (data: any) => {
  const result = await prisma.user.create({
    data: data,
  })
  return result
}

const roleChange = async (id: string, data: any) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

export const UserService = {
  getAlluser,
  getSingleUser,
  updateUser,
  deleteUser,
  createUser,
  createAdmin,
  roleChange,
  getAdminUser,
}
