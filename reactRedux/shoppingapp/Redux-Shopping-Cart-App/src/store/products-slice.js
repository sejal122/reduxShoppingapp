import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk("fetchProducts",async ()=>{
    const url='https://fakestoreapi.com/products/'
    const response= await fetch(url);
    
    
     const data= response.json()
     .then((res)=>{
        console.log(res)
        return res;
    })
    console.log(data)
   return data;
   
})
const productsSlice = createSlice({
    name:'products',
    initialState :{
        productList :null,
        dataLoaded:false,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            console.log('LOADING...')
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.dataLoaded=false;
            state.isError=true;
        })
       builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.dataLoaded=true;
        state.productList=action.payload
       })
    }})
    export const prodActions =productsSlice.actions;
    export default productsSlice;