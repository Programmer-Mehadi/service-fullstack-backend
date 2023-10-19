/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { JwtPayload } from 'jsonwebtoken'

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | null | undefined
    }
  }
}
declare module 'express-fileupload' {
  interface UploadedFile {
    data: Buffer
    // Add any other properties that you need here
  }
}
