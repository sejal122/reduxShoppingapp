import {configureStore , createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name:'counter',
    initialState: { counter: 0 },
    reducers : {
        increment(state,action){
            state.counter ++
        },
        decrement(state,action){
            state.counter --
        },
        ADDBy(state,action){
            state.counter += action.payload
        }
    }

})
export const actions = counterSlice.actions
const Store=configureStore(
    {
        reducer : counterSlice.reducer
    }
)

export default Store








// import {createStore} from 'redux';

// const reducerFnc = (state={counter:0},action)=>{
// // reducer func should be synchronous func
// // should not mutate original state. always a copy of original state
// if(action.type === 'INC'){
//     return {counter:state.counter+1}
// }
// if(action.type==='DEC'){
//     return {counter: state.counter-1}
// }
// if(action.type==='ADD'){
//      return {counter: state.counter + action.payload}
// }
// return state;
// }

// const Store = createStore(reducerFnc);
// export default Store;
