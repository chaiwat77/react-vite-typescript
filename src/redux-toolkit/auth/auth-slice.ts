import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginFormInput } from '../../app-types/login-form-input.type'
import { LoginErrorResponse, LoginResponse } from '../../app-types/login.type'
import { login } from '../../services/auth.service'
import { AxiosError } from '../../services/http.service'
import { RootState } from '../store'

// Define a type for the slice state
interface AuthState {
  profile: string
  email: string
  loginResponse: LoginResponse | null
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: 'jojotest@gmail.com',
  email: '123456',
  loginResponse: null,
}

export const loginThunk = 
createAsyncThunk<LoginResponse, LoginFormInput , {rejectValue: LoginErrorResponse}>('auth/loginThunkStatus', async (user: LoginFormInput, {rejectWithValue}) => {
  try {
    const response = await login(user.email,user.password)
    localStorage.setItem('token', JSON.stringify(response.data));
    console.log(response.data);
    return response.data
  } catch (error: any) {
      let err: AxiosError<LoginErrorResponse> = error;
      if(!err.response){
        throw error;
      }
      return rejectWithValue(err.response.data)
      console.log(err);
  }
})

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    // updateProfile คือ action ที่ส่งออกไป
    updateProfileAction: state => {
      // state.profile ='Chaiwat Chuenchom Example'
      state.profile ='admin@gmail.com'
      state.email = '123456'
      // state.email = 'jojo.chaiwat77@gmail.com Example'
    },
  },
  // ถ้าต้องการให้เป็น global state ถ้าใช้ unwarp เอาออกได้
  extraReducers:  (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, actions: PayloadAction<LoginResponse | null>)=> {
      state.loginResponse = actions.payload
    })
  }
})

export const { updateProfileAction } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export const SelectAuthState = (state: RootState) => state.authState

export default authSlice.reducer