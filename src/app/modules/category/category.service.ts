import prisma from '../../../shared/prisma'

const createToDB = async (data: any) => {
  const result = await prisma.category.create({
    data: data,
  })
  return result
}

const getAllToDB = async () => {
  const result = await prisma.category.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      authorID: true,
      user: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  })
  return result
}
const getAllListToDB = async () => {
  const result = await prisma.category.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      image: true,
    },
  })
  return result
}

const deleteToDB = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  })
  return result
}

const getSingleToDB = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const updateToDB = async (id: string, data: any) => {
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

export const CategoryService = {
  createToDB,
  getAllToDB,
  deleteToDB,
  getSingleToDB,
  updateToDB,
  getAllListToDB,
}
