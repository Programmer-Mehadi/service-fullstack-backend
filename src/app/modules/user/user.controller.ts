/* eslint-disable no-unsafe-optional-chaining */
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const getAllUser = async (req: Request, res: Response) => {
  const result = await UserService.getAlluser()
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
}

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getSingleUser(req.params.id)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  })
})
const getAdminUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAdminUser(req.params.id)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User fetched successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'No User Found',
      data: result,
    })
  }
})

const updateUser = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body)
  const result = await UserService.updateUser(req.params.id, req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUser(req.params.id)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  })
})

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  // console.log(data)
  // if ('data' in req.files?.profileImg) {
  //   const base64Data = req?.files?.profileImg?.data?.toString('base64')
  //   data.profileImg =
  //     `data:${req?.files?.profileImg?.mimetype};base64,` + base64Data
  // } else {
  //   data.profileImg = ''
  // }
  const result = await UserService.createUser(data)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})
const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const data = req.body

  // if ('data' in req.files?.profileImg) {
  //   const base64Data = req?.files?.profileImg?.data?.toString('base64')
  //   if (base64Data) {
  //     data.profileImg =
  //       `data:${req?.files?.profileImg?.mimetype};base64,` + base64Data
  //   } else {
  //     data.profileImg = ''
  //   }
  // } else {
  //   data.profileImg = ''
  // }
  const result = await UserService.createAdmin(data)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  })
})

const roleChange = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.roleChange(req.params.id, req.body)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Role changed successfully',
    data: result,
  })
})

export const UserController = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createUser,
  createAdmin,
  roleChange,
  getAdminUser,
}
