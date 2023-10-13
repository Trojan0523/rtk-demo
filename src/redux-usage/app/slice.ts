import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "./state";
import { RootState } from "../../store";
import { Notification } from '@arco-design/web-react'

export const fetchCount = createAsyncThunk('fetch-count', async () => {
    console.log('exec');
    const fetchData = await fetch('http://127.0.0.1:3000/get-count', {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const result = await fetchData.json()
    console.log('result', result)
    return result
})

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            const count = action.payload
            state.value += count
        }
    },
    // Redux store 本身无法处理异步逻辑。它只会同步地 dispatch action
    // 并通过调用根 reducer 函数来更新 state，然后通知视图更新。任何异步都必须在 store 之外发生。
    extraReducers: (builder) => {
        builder.addCase(fetchCount.pending, (state) => {
            state.loadingStatus = true
        })
            .addCase(fetchCount.fulfilled, (state, action: PayloadAction<{ count: number }>) => {
                const { count } = action.payload
                state.value = count
                state.loadingStatus = false
            })
            .addCase(fetchCount.rejected, (state) => {
                state.loadingStatus = false
                Notification.error({
                    title: 'there is some error during data fetching',
                    content: 'Please Try again'
                })
            })
    }
})

export const { increment, decrement, incrementByAmount, } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
