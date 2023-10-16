import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CategoryService } from './category.service'
import catchAsync from '../../../shared/catchAsync'

const createData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const result = await CategoryService.createToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Category Not created',
      data: null,
    })
  }
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category Not retrieved',
      data: null,
    })
  }
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteToDB(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category Not deleted',
      data: null,
    })
  }
})

const getSingleData = async (req: Request, res: Response) => {
  const result = await CategoryService.getSingleToDB(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category Not retrieved',
      data: null,
    })
  }
}

const updateData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const result = await CategoryService.updateToDB(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category Not updated',
      data: null,
    })
  }
})

export const CategoryController = {
  createData,
  getAllData,
  deleteData,
  getSingleData,
  updateData,
}
