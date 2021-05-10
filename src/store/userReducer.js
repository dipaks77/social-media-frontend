import { createSlice } from '@reduxjs/toolkit'


const reducers = {
    USER_LOGGEDIN: (user, action) => {
        return {
            ...user,
            data: { ...action.payload.data },
            token: action.payload.token
        }
    },
    USER_LOGGEDOUT: (user, action) => {
        return {
            ...user,
            data: null,
            token: null
        }
    },
    USER_PROFILE_GET: (user, action) => {
        return {
            ...user,
            data: { ...action.payload.data }
        }
    },
    USER_SET_TOKEN: (user, action) => {
        return {
            ...user,
            token: action.payload.token
        }
    }
}

const slice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        token: null
    },
    reducers
})

export default slice.reducer
export const actions = slice.actions