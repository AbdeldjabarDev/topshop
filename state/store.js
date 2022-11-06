import { configureStore } from '@reduxjs/toolkit'
import cartRefducer from './cartSlice'
import productsReducer from './productsSlice'
// let reducer = (state,action)=>
// {
// if(action.type==='content/setContent')
// return({
//     ...state,
//     content:action.payload
// })
//}
// export default configureStore({
//     reducer: 
//     {
//         counter:counterReducer,    
//     },
//   });
//   import { configureStore } from '@reduxjs/toolkit';
//   import counterReducer from './counterSlice';
  
export default configureStore({
 reducer :
 {
    cart:cartRefducer,
    products:productsReducer,
 },
  });
  
