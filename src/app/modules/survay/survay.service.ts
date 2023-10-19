import prisma from '../../../shared/prisma'

const getAllToDB = async () => {
  const result = await prisma.service.aggregate({
    _avg: {
      price: true,
    },
    _count: {
      id: true,
    },
  })
  const result2 = await prisma.booking.aggregate({
    _count: {
      id: true,
    },
  })
  return {
    result,
    result2,
  }
}

export const SurvayService = {
  getAllToDB,
}
