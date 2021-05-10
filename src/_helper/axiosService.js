import axios from 'axios'
import { isAuthenticated, getToken } from './auth'

const baseURL = 'http://localhost:8080/'
const headers = isAuthenticated() ? { authorization: getToken() } : {}

export const httpRequest = async payload => {
    const { url, method, data } = payload
    try {
        return await axios.request({
            baseURL,url, method, data, headers
        }).then(response => response.data)
    } catch (error) {
        console.log("error in api request: ", error)
    }
}