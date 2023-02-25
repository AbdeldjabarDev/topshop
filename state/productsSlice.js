import { createSlice } from "@reduxjs/toolkit";
import { fromJSON } from "postcss";
function findInArray(array,item)
{
for(let i = 0;i<array.length;i++)
{
    if(array.at(i).name == item)
    return i;
}
return -1;
}
export const slice =  createSlice({
    name : 'products',
    initialState : {
        value: [],
        ready:false,
       categories : [],
       selectedCategory:'',
       selectedProduct:{},
    },
    reducers :
    {   setSelectedProduct : (state,action)=>
        {
            state.selectedProduct = action.payload;
        }
        ,
        setSelectedCategory : (state,action) =>
        {
state.selectedCategory = action.payload;
        } , 
        addProducts : (state,action) => {
            action.payload.forEach((e)=>
            {
                
                state.value.push(e);
                // console.log('category object keys : ' + Object.keys(e.category));
            
             
               let i = findInArray(state.categories,e.category);
                if( i != -1 )
                {
                   let c = state.categories.at(i);
                
                    c.count += 1;
                  
                 state.categories[i] = c;
                }
                else
                {
                   
                    state.categories.push({name : e.category.toString(),count : 1});
                    
        
                }
                //console.log('p slice' + e._id)
            })
           
            // state.value.forEach((e)=>
            // {
            //     console.log(e)
            //    Object.keys(e).forEach((ep)=>
            //    {
            //     console.log(e[ep]);
            //    })
            // })
        },
       setReady : (state,action)=>
       {
        state.ready = true;
       },
    
       
    }
})
export const {addProducts,setReady,setSelectedCategory,setSelectedProduct} = slice.actions
export default slice.reducer;
// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value

// export default counterSlice.reducer


