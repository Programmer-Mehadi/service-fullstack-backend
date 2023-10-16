import prisma from '../../../shared/prisma'

const createToDB = async (data: any) => {
  const result = await prisma.blog.create({
    data: data,
  })
  console.log(result)
  return result
}

const getAllToDB = async () => {
  const result = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: true,
    },
  })
  return result
}

const statusChange = async (id: string, data: any) => {
  console.log(data)
  const result = await prisma.blog.update({
    where: {
      id: id,
    },
    data: {
      status: data,
    },
  })
  return result
}

const deleteToDB = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id: id,
    },
  })
  return result
}

const getSingle = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const update = async (id: string, data: any) => {
  const result = await prisma.blog.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

export const BlogService = {
  createToDB,
  getAllToDB,
  statusChange,
  deleteToDB,
  getSingle,
  update,
}