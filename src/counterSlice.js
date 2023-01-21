import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const asyncUpFetch = createAsyncThunk(
    'counterSlice/asyncUpFetch',
    async () => {
        const resp = await fetch("https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visit");
        const data = await resp.json();
        return data.value;
    }

)

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{
        value : 0,
        status:'Welcome'
    },
    reducers:{
        up:(state, action) => {
            state.value = state.value + action.payload;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(asyncUpFetch.pending, (state, action)=>{
            state.status = 'Loadiong';
        });
        builder.addCase(asyncUpFetch.fulfilled, (state, action)=>{
            state.status = 'Complete';
            state.value = action.payload;
        });
        builder.addCase(asyncUpFetch.rejected, (state, action)=>{
            state.status = 'Fail';
        })
    }
});
export default counterSlice;
export const {up, set} = counterSlice.actions;
export { asyncUpFetch };