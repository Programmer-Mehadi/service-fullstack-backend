import prisma from '../../../shared/prisma'

const createToDB = async (data: any) => {
  const result = await prisma.reviewAndRating.create({
    data: data,
  })
  return result
}

const getAllToDB = async (user: any) => {
  if (user?.role == 'admin') {
    const result = await prisma.reviewAndRating.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        review: true,
        rating: true,
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
    const result = await prisma.reviewAndRating.findMany({
      where: {
        userId: user?.userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        review: true,
        rating: true,
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
  const result = await prisma.reviewAndRating.delete({
    where: {
      id: id,
      userId: userId,
    },
  })
  return result
}

const getSingle = async (id: string) => {
  const result = await prisma.reviewAndRating.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      review: true,
      rating: true,
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
  const result = await prisma.reviewAndRating.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

const getAllByServiceToDB = async (id: string) => {
  const result = await prisma.reviewAndRating.findMany({
    where: {
      serviceId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      review: true,
      rating: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          name: true,
          profileImg: true,
        },
      },
    },
  })
  return result
}

export const ReviewService = {
  createToDB,
  getAllToDB,
  deleteToDB,
  getSingle,
  updateToDB,
  getAllByServiceToDB,
}
