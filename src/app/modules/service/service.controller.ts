import { Request, Response } from 'express'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ServiceService } from './service.service'
import catchAsync from '../../../shared/catchAsync'

const createData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body, authorID: req?.user?.userId }
  data.price = parseFloat(data?.price)

  const base64Data = req?.files?.image?.data?.toString('base64')
  if (base64Data) {
    data.image = `data:${req?.files?.image?.mimetype};base64,` + base64Data
  } else {
    data.image = ''
  }

  const result = await ServiceService.createToDB(data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service created successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Service Not created',
      data: null,
    })
  }
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: null,
    })
  }
})
const getPublicList = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getPublicListToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: null,
    })
  }
})

const getAllListData = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllListToDB()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: [],
    })
  }
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.deleteToDB(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service deleted successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not deleted',
      data: null,
    })
  }
})

const getSingleData = async (req: Request, res: Response) => {
  const result = await ServiceService.getSingleToDB(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: null,
    })
  }
}

const updateData = catchAsync(async (req: Request, res: Response) => {
  const data = { ...req.body }
  data.price = parseFloat(data?.price)
  const base64Data = req?.files?.image?.data?.toString('base64')
  if (base64Data) {
    data.image = `data:${req?.files?.image?.mimetype};base64,` + base64Data
  } else {
    data.image = ''
    delete data.image
  }
  const result = await ServiceService.updateToDB(req?.params?.id, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Service Not updated',
      data: null,
    })
  }
})
const statusChange = catchAsync(async (req: Request, res: Response) => {
  const { status } = req.body
  const result = await ServiceService.statusChange(req?.params?.id, status)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not updated',
      data: null,
    })
  }
})

const getAvailableService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAvailableService()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: null,
    })
  }
})
const getUpcomingService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getUpcomingService()
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: null,
    })
  }
})

const getServiceByCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getServiceByCategory(req?.params?.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service Not retrieved',
      data: null,
    })
  }
})

export const ServiceController = {
  createData,
  getAllData,
  deleteData,
  getSingleData,
  updateData,
  getAllListData,
  statusChange,
  getAvailableService,
  getUpcomingService,
  getServiceByCategory,
  getPublicList,
}
