/*
 * @Author: BuXiongYu
 * @Date: 2023-10-12 19:47:53
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-10-12 20:01:27
 * @Description: 请填写简介
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
