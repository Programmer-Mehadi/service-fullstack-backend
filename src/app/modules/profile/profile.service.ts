import prisma from '../../../shared/prisma'

const getInfo = async (id: string) => {
  const result = await prisma.user.findFirst({
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
const getEditInfo = async (id: string) => {
  const result = await prisma.user.findFirst({
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
      password: true,
    },
  })
  return result
}

const editInfo = async (id: string, data: any) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

export const ProfileService = {
  getInfo,
  getEditInfo,
  editInfo,
}
