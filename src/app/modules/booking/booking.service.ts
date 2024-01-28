import prisma from '../../../shared/prisma'

const createToDB = async (data: any) => {
  const result = await prisma.booking.createMany({
    data: data,
  })
  return result
}

const getAllToDB = async (user: any) => {
  if (user?.role == 'admin') {
    const result = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        price: true,
        time: true,
        date: true,
        sameId: true,
        service: {
          select: {
            title: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return result
  } else {
    const result: any = await prisma.booking.findMany({
      where: {
        userId: user?.userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        price: true,
        time: true,
        date: true,
        sameId: true,
        status: true,
        service: {
          select: {
            id: true,
            title: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    })
    return result
  }
}

const deleteToDB = async (id: string, userId: string) => {
  const result = await prisma.booking.delete({
    where: {
      id: id,
      userId: userId,
    },
  })
  return result
}

const getSingle = async (id: string) => {
  const result = await prisma.booking.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,

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
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

const statusChangeToDB = async (id: string, data: any) => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      status: data,
    },
  })
  return result
}
export const BookingService = {
  createToDB,
  getAllToDB,
  deleteToDB,
  getSingle,
  updateToDB,
  statusChangeToDB,
}
