import { z } from 'zod'

const CreateUser = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    email: z.string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    }),
    password: z.string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    }),
    role: z.string({
      required_error: 'Role is required',
      invalid_type_error: 'Role must be a string',
    }),
    contactNo: z.string({
      required_error: 'Contact no is required',
      invalid_type_error: 'Contact no must be a string',
    }),
    address: z.string({
      required_error: 'Address is required',
      invalid_type_error: 'Address must be a string',
    }),
    profileImg: z.string({
      required_error: 'Profile image is required',
      invalid_type_error: 'Profile image must be a string',
    }),
  }),
})

export const UserValidation = {
  CreateUser,
}
