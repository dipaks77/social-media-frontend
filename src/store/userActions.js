import { actions as apiActions } from './apiReducer'
import { actions as userActions } from './userReducer'

export const userRegister = data => {
    return apiActions.API_BEGIN({
        url: 'user',
        method: 'POST',
        data,
        onSuccess: userActions.USER_LOGGEDIN.type
    })
}
export const userLogin = data => {
    return apiActions.API_BEGIN({
        url: 'user/login',
        method: 'POST',
        data,
        onSuccess: userActions.USER_LOGGEDIN.type
    })
}
export const userLogout = () => {
    return userActions.USER_LOGGEDOUT({})
}
export const getUserProfile = data => {
    return apiActions.API_BEGIN({
        url: 'user/profile',
        method: 'GET',
        onSuccess: userActions.USER_PROFILE_GET
    })
}
export const setAuthToken = token => {
    return userActions.USER_SET_TOKEN({ token })
}