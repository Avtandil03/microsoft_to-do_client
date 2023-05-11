import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/IUser'

interface IUserValid extends IUser {

  isNameValid: boolean
  isEmailValid: boolean
  isPasswordValid: boolean
}


const initialState: IUserValid = {
  name: '',
  email: '',
  password: '',
  isNameValid: false,
  isEmailValid: false,
  isPasswordValid: false
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
      state.name = action.payload
      state.isNameValid = validateName(state.name)
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
      state.isEmailValid = validateEmail(state.email)
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
      state.isPasswordValid = validatePassword(state.password)
    }
  },
})

export const { setEmail, setName, setPassword } = userSlice.actions

export default userSlice.reducer