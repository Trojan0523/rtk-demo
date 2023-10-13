/*
 * @Author: BuXiongYu
 * @Date: 2023-10-12 19:21:50
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-10-13 14:31:43
 * @Description: 请填写简介
 */
import { configureStore } from "@reduxjs/toolkit"
import reducer from "./createReducer"

const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store