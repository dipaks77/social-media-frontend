import { createSlice } from '@reduxjs/toolkit'

const reducers = {
    API_BEGIN: (api, action) => {
        return {
            ...api,
            data: { ...action.payload.data },
            loading: true
        }
    },
    API_SUCCESS: (api, action) => {
        return {
            ...api,
            status: true,
            data: action.payload.data,
            loading: false
        }
    },
    API_ERROR: (api, action) => {
        return {
            ...api,
            status: false,
            data: action.payload.data,
            loading: false
        }
    }
}

const slice = createSlice({
    name: 'user',
    initialState: {
        status: null,
        data: null,
        loading: false
    },
    reducers
})

export default slice.reducer
export const actions = slice.actions