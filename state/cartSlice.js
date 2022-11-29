import { createSlice } from "@reduxjs/toolkit";
function findInArray(arr,p)
{
    let c = -1;
  arr.forEach((e,i)=>{
    if(e._id === p._id)
    {
        c = i;
    }
    
  })
  return c;
}
export const slice =  createSlice({
    name : 'cartProducts',
    initialState : {
        value: [],
        user:'',
        token:'',
        loggedIn:false,
        count:[],
        last_logged_in:'',
        total:0,
        
    },
    reducers :
    {     
        addProduct : (state,action) => {
            if(findInArray(state.value,action.payload) === -1)
            {
            
                console.log(action.payload.title  + ':' + 'added');
                state.value.push(action.payload);
                state.count.push(1);
                state.total += action.payload.price;
                return;
            }
            else
           {
            console.log(action.payload.title  + ':' + "not added it's already there");
             return;}
            
        },
        removeProduct : (state,action) =>
        {
            if(findInArray(state.value,action.payload) != -1)
            {
               
                let result = [];
                let countResult =[];
                let i = findInArray(state.value,action.payload);
                console.log(state.value.at(i).title + ' :' + ' removed')
                result.push(...Array.prototype.concat(state.value.slice(0,i),state.value.slice(i+1,state.value.length)));
                countResult.push(...Array.prototype.concat(state.count.slice(0,i),state.count.slice(i+1,state.value.length)));

                state.value = result;  
                state.count  = countResult;
                let t= 0;
                state.value.forEach((p,i)=>{
                    t+= p.price*state.count.at(i);

                })
                state.total= t;

                state.value.forEach((e)=> console.log(e.title));
                
                return;
            }
            else
            {
                console.log('not even there to be removed');
            }
          
        },
        setUser : (state,action)=>
        {
            state.user = action.payload;
        },
        setToken : (state,action) =>
        {
           state.token = action.payload;
        },
        setLoggedIn : (state,action) =>
        {
            state.loggedIn = action.payload;
        },
        setQuery :(state,action) => {
            state.dummy = action.payload;
        }
        ,
        setProductcount : (state,action) =>
        {
            let i = findInArray(state.value,action.payload.p);
            if(i != -1)
            {
                state.total += (action.payload.c-state.count.at(i))* action.payload.p.price;
                state.count[i] = action.payload.c;  
               
            }
           
        }
    }
})
export const {addProduct,removeProduct,setUser,setToken,setLoggedIn,setQuery,setProductcount} = slice.actions
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


