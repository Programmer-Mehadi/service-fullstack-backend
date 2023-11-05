import prisma from '../../../shared/prisma'

const createFaqToDB = async (data: any) => {
  const result = await prisma.faqs.create({
    data: data,
  })
  return result
}

const getAllToDB = async () => {
  const result = await prisma.faqs.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: true,
    },
  })
  return result
}

const getPublicAll = async () => {
  const result = await prisma.faqs.findMany({
    where: {
      status: 'active',
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return result
}
const statusChange = async (id: string, data: any) => {
  const result = await prisma.faqs.update({
    where: {
      id: id,
    },
    data: {
      status: data,
    },
  })
  return result
}

const deleteFaq = async (id: string) => {
  const result = await prisma.faqs.delete({
    where: {
      id: id,
    },
  })
  return result
}

const getSingle = async (id: string) => {
  const result = await prisma.faqs.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      ques: true,
      ans: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      user: true,
    },
  })
  return result
}

const updateFaq = async (id: string, data: any) => {
  const result = await prisma.faqs.update({
    where: {
      id: id,
    },
    data: data,
  })
  return result
}

export const FaqService = {
  createFaqToDB,
  getAllToDB,
  statusChange,
  deleteFaq,
  getSingle,
  updateFaq,
  getPublicAll,
}
