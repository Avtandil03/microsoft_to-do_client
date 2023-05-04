// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// // import { AppThunk } from '../../app/store';
// import axios from 'axios';

// interface AuthState {
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setLoading: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
// });

// export const { setLoading, setError, clearError } = authSlice.actions;

// export const login = (credentials: { email: string; password: string }): AppThunk => async (dispatch) => {
//   dispatch(setLoading());

//   try {
//     const response = await axios.post('/api/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     // Dispatch user data to store or redirect to dashboard
//   } catch (error) {
//     dispatch(setError(error.response?.data?.message ?? 'An unknown error occurred'));
//   }
// };

// export const register = (data: { name: string; email: string; password: string }): AppThunk => async (dispatch) => {
//   dispatch(setLoading());

//   try {
//     const response = await axios.post('/api/auth/register', data);
//     localStorage.setItem('token', response.data.token);
//     // Dispatch user data to store or redirect to dashboard
//   } catch (error) {
//     dispatch(setError(error.response?.data?.message ?? 'An unknown error occurred'));
//   }
// };

// export default authSlice.reducer;
