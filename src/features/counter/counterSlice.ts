import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
type arrObj = {
  id: number,
  rname: string,
  price: number,
  qnty: number
}
type CounterState = {
  cart: arrObj[]
}

// Define the initial state using that type
const initialState: CounterState = {
  cart: []
}

export const counterSlice = createSlice({
  name: 'shoppingCart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
      if(itemIndex >= 0){
        state.cart[itemIndex].qnty += 1;
      }else{
        state.cart = [...state.cart, action.payload];
      }
    },
    deleteItem: (state, action) => {
      const data = state.cart.filter(item => item.id !== action.payload)
      state.cart = data
    },
    decrement: (state,action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
      state.cart[itemIndex].qnty -= 1;
    }
  },
})

export const { addToCart, deleteItem, decrement } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state

export default counterSlice.reducer