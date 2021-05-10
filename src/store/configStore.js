import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import ApiMiddleware from '../middlewares/ApiMiddleware'
import reducer from './reducers'

export default () => {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            ApiMiddleware
        ]
    })
}