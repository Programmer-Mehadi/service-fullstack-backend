import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { BlogService } from './blog.service'
import catchAsync from '../../../shared/catchAsync'

const create = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body, authorID: req?.user?.userId }
  const base64Data = req?.files?.image?.data?.toString('base64')
  if (base64Data) {
    data.image = `data:${req?.files?.image?.mimetype};base64,` + base64Data
  } else {
    data.image = ''
  }

  const result = await BlogService.createToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Not created',
      data: null,
    })
  }
})

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Not retrieved',
      data: null,
    })
  }
})

const statusChange = catchAsync(async (req: Request, res: Response) => {
  const { status } = req.body
  const result = await BlogService.statusChange(req?.params?.id, status)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Not updated',
      data: null,
    })
  }
})

const deleteToDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.deleteToDB(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Not deleted',
      data: null,
    })
  }
})

const getSingle = async (req: Request, res: Response) => {
  const result = await BlogService.getSingle(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Not retrieved',
      data: null,
    })
  }
}

const update = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  const base64Data = await req?.files?.image?.data?.toString('base64')
  console.log(base64Data)
  if (base64Data) {
    data.image = `data:${req?.files?.image?.mimetype};base64,` + base64Data
  } else {
    delete data.image
  }
  const result = await BlogService.update(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Not updated',
      data: null,
    })
  }
})

export const BlogController = {
  create,
  getAll,
  statusChange,
  deleteToDB,
  getSingle,
  update,
}