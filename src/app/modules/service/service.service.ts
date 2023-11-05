import prisma from '../../../shared/prisma'

const createToDB = async (data: any) => {
  const result = await prisma.service.create({
    data: data,
  })
  return result
}

const getAllToDB = async (query: {
  name: string
  category: string
  location: string
}) => {
  const result = await prisma.service.findMany({
    where: {
      title: {
        contains: query.name,
        mode: 'insensitive',
      },
      categoryId: {
        contains: query.category,
      },
      location: {
        contains: query.location,
        mode: 'insensitive',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
      availability: true,
      upcoming: true,
      price: true,
      user: {
        select: {
          name: true,
        },
      },
      location: true,
      category: {
        select: {
          title: true,
        },
      },
      publicationDate: true,
    },
  })
  return result
}
const getPublicListToDB = async (query: any) => {
  const result = await prisma.service.findMany({
    where: {
      title: {
        contains: query.name,
        mode: 'insensitive',
      },
      categoryId: {
        contains: query.category,
      },
      location: {
        contains: query.location,
        mode: 'insensitive',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
      availability: true,
      upcoming: true,
      price: true,
      user: {
        select: {
          name: true,
        },
      },
      location: true,
      category: {
        select: {
          title: true,
        },
      },
      publicationDate: true,
    },
  })
  return result
}
const getAllListToDB = async () => {
  const result = await prisma.service.findMany({
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
  const result = await prisma.service.delete({
    where: {
      id: id,
    },
  })
  return result
}

const getSingleToDB = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
      availability: true,
      location: true,
      features: true,
      price: true,
      upcoming: true,
      category: {
        select: {
          title: true,
          id: true,
        },
      },
    },
  })
  return result
}

const updateToDB = async (id: string, data: any) => {
  const result = await prisma.service.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}
const statusChange = async (id: string, data: any) => {
  const result = await prisma.service.update({
    where: {
      id: id,
    },
    data: {
      availability: data,
    },
  })
  return result
}

const getAvailableService = async () => {
  const result = await prisma.service.findMany({
    where: {
      availability: 'Available',
      upcoming: {
        not: 'true',
      },
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      location: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  })
  return result
}
const getUpcomingService = async () => {
  const result = await prisma.service.findMany({
    where: {
      upcoming: 'true',
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      location: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  })
  return result
}

const getServiceByCategory = async (id: string) => {
  const result = await prisma.service.findMany({
    where: {
      categoryId: id,
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      location: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  })
  return result
}

export const ServiceService = {
  createToDB,
  getAllToDB,
  deleteToDB,
  getSingleToDB,
  updateToDB,
  getAllListToDB,
  statusChange,
  getAvailableService,
  getUpcomingService,
  getServiceByCategory,
  getPublicListToDB,
}
