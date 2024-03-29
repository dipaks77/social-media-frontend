import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'

const reducer = combineReducers({
    user: userReducer
})

export default reducer