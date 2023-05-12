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
    },
    credentials: "include"
  }),

  endpoints: builder => ({
    registrationUser: builder.mutation<IResponse, IUser>({
      query(body) {
        return {
          url: `registration`,
          method: 'POST',
          body,
        }
      },      
    }),
    loginUser: builder.mutation<IResponse, IUser>({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        }
      },      
    }),
    logoutUser: builder.mutation<void, void>({
      query(){
        return {
          url:  `logout`,
          method: 'POST'
        }
      }
    }),
    checkAuth: builder.query<IResponse,void>({
      query() {
        return {
          url: 'refresh'
        }
      },
    }),
  }),
})

export const { useRegistrationUserMutation, useLoginUserMutation, useLogoutUserMutation, useLazyCheckAuthQuery } = authApi