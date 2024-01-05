import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/Todo/tudo'

export const store = configureStore({
    reducer: todoReducers
})