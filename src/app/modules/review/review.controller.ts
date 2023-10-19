import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ReviewService } from './review.service'
import catchAsync from '../../../shared/catchAsync'

const createData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body, userId: req?.user?.userId }
  data.rating = parseInt(data.rating)

  const result = await ReviewService.createToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Review Not created',
      data: null,
    })
  }
})

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getAllToDB(req?.user)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review Not retrieved',
      data: null,
    })
  }
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.deleteToDB(
    req?.params?.id,
    req?.user?.userId
  )
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review Not deleted',
      data: null,
    })
  }
})

const getSingleData = async (req: Request, res: Response) => {
  const result = await ReviewService.getSingle(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review Not retrieved',
      data: null,
    })
  }
}

const updateData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const result = await ReviewService.updateToDB(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review Not updated',
      data: null,
    })
  }
})

const getAllByService = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getAllByServiceToDB(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review Not retrieved',
      data: null,
    })
  }
})

export const ReviewController = {
  createData,
  getAll,
  deleteData,
  getSingleData,
  updateData,
  getAllByService,
}
