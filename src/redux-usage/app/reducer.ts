/*
 * @Author: BuXiongYu
 * @Date: 2023-10-12 19:36:06
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-10-12 22:23:02
 * @Description: 请填写简介
 */
import { Reducer, type PayloadAction } from '@reduxjs/toolkit'
import initialState from './state'

const counterReducer: Reducer<typeof initialState> = {
    increment: state => {
        state.value += 1
    },
    decrement: state => {
        state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
    }
}