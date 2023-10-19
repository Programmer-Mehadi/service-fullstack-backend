import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { BookingService } from './booking.service'
import catchAsync from '../../../shared/catchAsync'

const createData = catchAsync(async (req: Request, res: Response) => {
  const sameId: string = Math.random().toString(36).substr(2, 9)
  const data = req?.body?.map((item: any) => {
    return {
      ...item,
      sameId,
      userId: req?.user?.userId,
    }
  })

  const result = await BookingService.createToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Booking Not created',
      data: null,
    })
  }
})

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.getAllToDB(req?.user)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking Not retrieved',
      data: null,
    })
  }
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.deleteToDB(
    req?.params?.id,
    req?.user?.userId
  )
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking Not deleted',
      data: null,
    })
  }
})

const getSingleData = async (req: Request, res: Response) => {
  const result = await BookingService.getSingle(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking Not retrieved',
      data: null,
    })
  }
}

const updateData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const result = await BookingService.updateToDB(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking Not updated',
      data: null,
    })
  }
})
const statusChange = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.statusChangeToDB(
    req?.params?.id,
    req?.body?.status
  )
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking Not updated',
      data: null,
    })
  }
})
export const BookingController = {
  createData,
  getAll,
  deleteData,
  getSingleData,
  updateData,
  statusChange,
}
