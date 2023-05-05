import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/IUser'


interface  IResponse{
  accessToken: string
  refreshToken: string
  user: IUser
}

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl:  import.meta.env.VITE_SERVER_URL,
    prepareHeaders(headers){
      const token = localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  }),

  endpoints: builder => ({
    registrationUser: builder.mutation<IUser, IUser>({
      query(body) {
        return {
          url: `registration`,
          method: 'POST',
          body,
        }
      },      
    })
  })
})

export const { useRegistrationUserMutation } = authApi