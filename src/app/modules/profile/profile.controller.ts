/* eslint-disable no-unsafe-optional-chaining */
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { ProfileService } from './profile.service'

const getInfo = async (req: Request, res: Response) => {
  const result = await ProfileService.getInfo(req?.user?.userId)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile data retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'No profile data found',
      data: null,
    })
  }
}
const getEditInfo = async (req: Request, res: Response) => {
  const result = await ProfileService.getEditInfo(req?.user?.userId)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile data retrieved successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'No profile data found',
      data: null,
    })
  }
}

const editInfo = async (req: Request, res: Response) => {
  const data = req.body
  // if ('data' in req?.files?.profileImg) {
  //   const base64Data = req?.files?.profileImg?.data?.toString('base64')
  //   data.profileImg =
  //     `data:${req?.files?.profileImg?.mimetype};base64,` + base64Data
  // } else {
  //   delete data.profileImg
  // }
  const result = await ProfileService.editInfo(req?.user?.userId, data)
  if (result) {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile data updated successfully',
      data: result,
    })
  } else {
    sendResponse<object>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'No profile data found',
      data: null,
    })
  }
}

export const ProfileController = {
  getInfo,
  getEditInfo,
  editInfo,
}
