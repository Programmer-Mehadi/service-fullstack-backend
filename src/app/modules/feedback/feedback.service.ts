import prisma from '../../../shared/prisma'

const createToDB = async (data: any) => {
  const result = await prisma.feedBack.create({
    data: data,
  })
  return result
}

const getAllToDB = async (user: any) => {
  if (user?.role == 'admin') {
    const result = await prisma.feedBack.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        review: true,
        experience: true,
        createdAt: true,
        updatedAt: true,
        user: {
          select: {
            name: true,
            id: true,
          },
        },
        service: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    })
    return result
  } else {
    const result = await prisma.feedBack.findMany({
      where: {
        userId: user?.userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        review: true,
        experience: true,
        createdAt: true,
        updatedAt: true,
        user: {
          select: {
            name: true,
            id: true,
          },
        },
        service: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    })
    return result
  }
}

const deleteToDB = async (id: string, userId: string) => {
  const result = await prisma.feedBack.delete({
    where: {
      id: id,
      userId: userId,
    },
  })
  return result
}

const getSingle = async (id: string) => {
  const result = await prisma.feedBack.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      review: true,
      experience: true,
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
  })
  return result
}

const updateToDB = async (id: string, data: any) => {
  const result = await prisma.feedBack.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

export const FeedbackService = {
  createToDB,
  getAllToDB,
  deleteToDB,
  getSingle,
  updateToDB,
}
