import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { FaqService } from './faq.service'
import catchAsync from '../../../shared/catchAsync'

const createFaq = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body, authorID: req?.user?.userId }
  const result = await FaqService.createFaqToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not created',
      data: null,
    })
  }
})

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await FaqService.getAllToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not retrieved',
      data: null,
    })
  }
})
const getPublicAll = catchAsync(async (req: Request, res: Response) => {
  const result = await FaqService.getPublicAll()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not retrieved',
      data: null,
    })
  }
})

const statusChange = catchAsync(async (req: Request, res: Response) => {
  const { status } = req.body
  const result = await FaqService.statusChange(req?.params?.id, status)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not updated',
      data: null,
    })
  }
})

const deleteFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await FaqService.deleteFaq(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not deleted',
      data: null,
    })
  }
})

const getSingleFaq = async (req: Request, res: Response) => {
  const result = await FaqService.getSingle(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not retrieved',
      data: null,
    })
  }
}

const updateFaq = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const result = await FaqService.updateFaq(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq Not updated',
      data: null,
    })
  }
})

export const FaqController = {
  createFaq,
  getAll,
  statusChange,
  deleteFaq,
  getSingleFaq,
  updateFaq,
  getPublicAll,
}
