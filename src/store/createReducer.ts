import { combineReducers, type Reducer } from "@reduxjs/toolkit"
import CounterReducer from '../redux-usage/app/slice'

const reducer = {
    counter: CounterReducer,
}

export default reducer