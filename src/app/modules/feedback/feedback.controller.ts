import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { FeedbackService } from './feedback.service'
import catchAsync from '../../../shared/catchAsync'

const createData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body, userId: req?.user?.userId }
  data.experience = parseInt(data.experience)

  const result = await FeedbackService.createToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Feedback Not created',
      data: null,
    })
  }
})

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.getAllToDB(req?.user)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback Not retrieved',
      data: null,
    })
  }
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.deleteToDB(
    req?.params?.id,
    req?.user?.userId
  )
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback Not deleted',
      data: null,
    })
  }
})

const getSingleData = async (req: Request, res: Response) => {
  const result = await FeedbackService.getSingle(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback Not retrieved',
      data: null,
    })
  }
}

const updateData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const result = await FeedbackService.updateToDB(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Feedback Not updated',
      data: null,
    })
  }
})

export const FeedbackController = {
  createData,
  getAll,
  deleteData,
  getSingleData,
  updateData,
}
