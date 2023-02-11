import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRoomBooking } from '../../services/room.service'
import { RoomBooking } from '../../app-types/room-booking.type'
import { AxiosError } from '../../services/http.service'
import { RootState } from '../store'

// Define a type for the slice state
interface RoomBookingState {
  roomBooking: RoomBooking| null
}

// Define the initial state using that type
const initialState: RoomBookingState = {
    roomBooking: null
 
}

export const getRoomBookingThunk = createAsyncThunk<RoomBooking , void>('room/getRoomBookingThunkStatus', async () => {
  try {
    const response = await getRoomBooking();
    console.log(response.data);
    return response.data
  } catch (error: any) {
      let err: AxiosError<any> = error;
      if(!err.response){
        throw error;
      }
      return err.response.data;
      console.log(err);
  }
})

export const roomBookingSlice = createSlice({
  name: 'roomBooking',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {},
  // ถ้าต้องการให้เป็น global state ถ้าใช้ unwarp เอาออกได้
  extraReducers:  (builder) => {
    builder.addCase(getRoomBookingThunk.fulfilled, (state, actions: PayloadAction<RoomBooking | null>)=> {
        state.roomBooking = actions.payload
    })
  }
})


export const selectRoomBookingState = (state: RootState) => state.roomBookingState

export default roomBookingSlice.reducer