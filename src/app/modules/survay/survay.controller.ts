import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { SurvayService } from './survay.service'

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await SurvayService.getAllToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Servay retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Servay Not retrieved',
      data: null,
    })
  }
})

export const ServayController = {
  getAll,
}
