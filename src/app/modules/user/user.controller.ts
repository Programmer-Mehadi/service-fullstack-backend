import { Request, Response } from 'express'
import { UserService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'

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

const updateUser = catchAsync(async (req: Request, res: Response) => {
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
  console.log(data.address)
  const base64Data = req?.files?.profileImg?.data?.toString('base64')
  data.profileImg =
    `data:${req?.files?.profileImg?.mimetype};base64,` + base64Data
  const result = await UserService.createUser(data)
  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const UserController = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createUser,
}
