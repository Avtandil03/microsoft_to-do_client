import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/IUser'

interface IUserValid {
  user: IUser
  isNameValid: boolean
  isEmailValid: boolean
  isPasswordValid: boolean
  isAuth?: boolean
}


const initialState: IUserValid = {
  user:{
  name: '',
  email: '',
  password: '', },
  isNameValid: false,
  isEmailValid: false,
  isPasswordValid: false,
}

const validateName = (name:string) => {
  if(name.length < 3) return false
  return true
}

const validateEmail = (email: string) => {
  if (String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
    return true
  }
  return false
}

const validatePassword = (password:string) => {
  if(password.length < 4) return false
  return true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload
      state.isNameValid = validateName(state.user.name)
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload
      state.isEmailValid = validateEmail(state.user.email)
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.user.password = action.payload
      state.isPasswordValid = validatePassword(state.user.password)
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    resetUser: (state) => {
      state.user = initialState.user
      state.isEmailValid = false
      state.isNameValid = false
      state.isPasswordValid = false
    },
    setIsAuth:(state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  },
})

export const { setEmail, setName, setPassword, setUser, resetUser: resetUserData, setIsAuth } = userSlice.actions

export default userSlice.reducer