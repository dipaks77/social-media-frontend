import axios from 'axios'
import { actions as apiActions } from '../store/apiReducer'
import { isAuthenticated, getToken } from '../_helper/auth'

const ApiMiddleware = ({ dispatch }) => next => async action => {

    // check if action type is of non api action
    if (action.type !== apiActions.API_BEGIN.type) return next(action)

    // 
    const { url, method, data, onSuccess } = action.payload
    const headers = isAuthenticated() ? { Authentication: getToken() } : {}
    try {
        const result = await axios.request({
            baseURL: 'http://localhost:8080/',
            url,
            method,
            data,
            headers
        })

        const response = { ...result.data }
        dispatch(apiActions.API_SUCCESS(response))
        if (onSuccess) dispatch({ type: onSuccess, payload: { ...response } })
    } catch (error) {
        dispatch(apiActions.API_ERROR(error))
    }
}

export default ApiMiddleware