import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { singWays } from '../types'

export interface wayState {
  signWay: string,
  areChoosen: boolean
}

const initialState: wayState = {
  signWay: singWays.login,
  areChoosen: false
}

export const signWaySlice = createSlice({
  name: 'signWay',
  initialState,
  reducers: {
    setSignWay: (state, action: PayloadAction<string>) => {
      state.signWay = action.payload
    },
    setAreChoosen: (state, action: PayloadAction<boolean>) => {
      state.areChoosen = action.payload
    }
  },
})
export const { setSignWay, setAreChoosen } = signWaySlice.actions

export default signWaySlice.reducer